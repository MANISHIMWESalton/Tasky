const {Router} = require("express")
const todoControlleries = require("../modules/todo/controller/todoControllers")

const router = Router();
router.post("/task",todoControlleries.createTask)
router.get("/tasks",todoControlleries.getTasks)
router.get("/task/:id",todoControlleries.getTask)
router.put("/task/:id",todoControlleries.updateTask)
router.delete("/task/:id",todoControlleries.deleteTask)


module.exports = router;