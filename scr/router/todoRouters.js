import { Router } from "express";
import todoControllers from "../modules/todo/controller/todoControllers";

const router = Router();
router.post("/create",todoControllers)
router.get("/get",todoControllers)
router.put("/update:id",todoControllers)
router.get("/get:id",todoControllers)
router.delete("/delete:id",todoControllers)
export default router