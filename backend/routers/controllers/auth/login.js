const db = require("./../../../db/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = (req, res) => {
  try {
    const { email, password } = req.body;
    const command = `SELECT * FROM users WHERE email = ? AND is_deleted= 0; `;
    const data = [email, password];
    db.query(command, data, async (err, result) => {
      console.log(result);
      if (err) {
        return res.status(404).json("Internal Server Error");
      } else if (!result.length) {
        return res.status(404).json("This email doesn't exist");
      } else {
        const validUser = await bcrypt.compare(password, result[0].password);
        if (validUser) {
          const payload = {
            userId: result[0].user_id,
            roleId: result[0].role_id,
            firstName: result[0].firstName,
            lastName: result[0].lastName,
            active: result[0].active,
          };
          const options = {
            expiresIn: "60m",
          };
          let token = jwt.sign(payload, process.env.SECRET, options);
          res.status(200).json(token);
        } else {
          res.status(403).json("Password you've entered is incorrect");
        }
      }
    });
  } catch (error) {
    return res.status(403).json("Password or Email is incorrect");
  }
};

module.exports = {
  login,
};
