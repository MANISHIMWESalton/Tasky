const { Router } = require("express");
const router = Router();
const authrouter = require("./authRouters")
const todoRouter = require("./todoRouters")
const authMiddleware = require("../authmiddleware/authmiddleware")
router.use("/auth", authrouter)
router.use("/task", authMiddleware, todoRouter)
module.exports = router