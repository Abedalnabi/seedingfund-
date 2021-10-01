const express = require("express");

// import controller

const { createNewUser } = require("../../controllers/auth/signUp");
// create router

const registerRouter = express.Router();
// create route

registerRouter.post("/register", createNewUser);

// export router

module.exports = registerRouter;
