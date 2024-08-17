const {Router} = require("express")
const userRouter = require("./userRouter")
const taskRouter = require("./todoRouters")
const router = Router();
router.use("/auth",userRouter)
router.use("/todo",taskRouter)

module.exports = router;