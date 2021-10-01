const express = require("express");

// import controller

const { login } = require("./../../controllers/auth/login");
// create router

const loginRouter = express.Router();
// create route

loginRouter.post("/login", login);

// export router

module.exports = loginRouter;
