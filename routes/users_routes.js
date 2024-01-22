const express = require("express");
const routes = express.Router();
const usersController = require("../controllers/users");

routes.post("/login", usersController.login);
routes.post("/register", usersController.register);

module.exports = routes;
