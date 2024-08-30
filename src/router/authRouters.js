const { Router } = require("express");
const authController = require("../modules/controller/authControlleries")
const authroute = Router();
authroute.post("/create", authController.register);
authroute.post("/login", authController.login);
module.exports = authroute;