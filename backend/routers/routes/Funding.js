const express = require("express");

// import controller

const {
  addFunding,
  getMyFunding,
  getAllFunding,
  updateFundStateApproved,
  updateFundStateDisApproved,
} = require("../controllers/Funding");
// create router

const fundingRouter = express.Router();
// create route

fundingRouter.post("/addFunding", addFunding);
fundingRouter.get("/myFunding/:user_id", getMyFunding);
fundingRouter.get("/allRequest/:role_id", getAllFunding);
fundingRouter.post("/updateApproved/", updateFundStateApproved);
fundingRouter.post("/updateDisApproved/", updateFundStateDisApproved);

// export router

module.exports = fundingRouter;
