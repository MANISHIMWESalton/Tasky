const { Router } = require("express");
const todoController = require("../modules/controller/todoControlleries")
const todoroute = Router();
todoroute.post("/create-task", todoController.createTask)
todoroute.get("/get-tasks", todoController.getAllTasks)
todoroute.get("/get-task/:id", todoController.getTask)
todoroute.put("/updata-task/:id", todoController.updataTask)
todoroute.delete("/delete-task/:id", todoController.deleteTask)

module.exports = todoroute