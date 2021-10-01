const connection = require("./../../../db/db");
const bcrypt = require("bcrypt");

const createNewUser = async (req, res) => {
  const { firstName, lastName, age, email, password, role_id } = req.body;
  let ID;
  let active;
  if (role_id == "Project Manger") {
    ID = 2;
    active = 1;
  } else {
    ID = 1;
    active = 0;
  }
  // hash Pass && convert email to lowercase
  const hashPassword = await bcrypt.hash(password, 10);
  const emailAfterLowercase = email.toLowerCase();
  // insert user to DB
  const query_insert = `INSERT INTO users (firstName,lastName,age,email,password,role_id,active) VALUES (?,?,?,?,?,?,?);`;
  const data_insert = [
    firstName,
    lastName,
    age,
    emailAfterLowercase,
    hashPassword,
    ID,
    active,
  ];
  await connection.promise().query(query_insert, data_insert);
  //find user which added
  const query_select = `SELECT * FROM users WHERE email= ? && password = ?`;
  const data_select = [emailAfterLowercase, hashPassword];
  const userAdded = await connection.promise().query(query_select, data_select);
  res.status(201).json(userAdded[0]);
};

module.exports = {
  createNewUser,
};
