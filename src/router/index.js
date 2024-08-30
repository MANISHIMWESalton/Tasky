const { Router } = require("express");
const router = Router();
const authrouter = require("./authRouters")
const todoRouter = require("./todoRouters")
router.use("/auth", authrouter)
router.use("/task", todoRouter)
module.exports = router