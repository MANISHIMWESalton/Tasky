const Router = require("express")
const authControlleries = require("../../scr/modules/auth/controller/authControllers")
const router = Router();

router.post("/create",authControlleries.register)

module.exports = router
