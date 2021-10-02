const db = require("./../../db/db");

const addFunding = async (req, res) => {
  const { project_name, project_description, project_sector, budget, user_id } =
    req.body;
  const command = `INSERT INTO fundingdetails (project_name, project_description, project_sector, budget , user_id) VALUES (?,?,?,?,?);`;
  const date = [
    project_name,
    project_description,
    project_sector,
    budget,
    user_id,
  ];
  console.log(date);
  db.query(command, date, (err) => {
    if (err) {
      return;
    }
  });
  // find funding which added
  const query_select = `SELECT * FROM fundingdetails WHERE project_name = ? && project_description = ? && project_sector =? &&budget = ? && user_id = ?;`;
  const data_select = [
    project_name,
    project_description,
    project_sector,
    budget,
    user_id,
  ];
  const fundAdded = await db.promise().query(query_select, data_select);
  res.status(201).json(fundAdded[0]);
};

const getMyFunding = async (req, res) => {
  const user_id = req.params.user_id;
  const query_select = `SELECT * FROM fundingdetails WHERE user_id = ?;`;
  const data_select = [user_id];
  const myFunding = await db.promise().query(query_select, data_select);
  res.status(201).json(myFunding[0]);
};

const getAllFunding = async (req, res) => {
  console.log("role");
  const { role_id } = req.params;
  console.log(role_id);
  if (role_id != 1) {
    return;
  }
  const query_select = `SELECT fundingdetails.funding_id, fundingdetails.budget,
  fundingdetails.project_name,fundingdetails.project_description,
  fundingdetails.project_sector,fundingdetails.porject_state, users.firstName 
  FROM users INNER JOIN fundingdetails ON users.user_id = fundingdetails.user_id;`;
  const allRequests = await db.promise().query(query_select);
  res.json(allRequests[0]);
};
//
const updateFundStateApproved = async (req, res) => {
  const { funding_id } = req.body;
  const query = `UPDATE fundingdetails SET porject_state = 1 WHERE funding_id = ?;`;
  const command = [funding_id];
  const update = await db.promise().query(query, command);
  res.json(update[0]);
};
const updateFundStateDisApproved = async (req, res) => {
  const { funding_id } = req.body;
  console.log("aaaaaaaaa");
  const query = `UPDATE fundingdetails SET porject_state = 0 WHERE funding_id = ?;`;
  const command = [funding_id];
  const update = await db.promise().query(query, command);
  res.json(update[0]);
};
module.exports = {
  addFunding,
  getMyFunding,
  getAllFunding,
  updateFundStateApproved,
  updateFundStateDisApproved,
};
