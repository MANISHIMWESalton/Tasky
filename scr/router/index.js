import { Router } from "express";
import router from "./todoRouters";
 
const router = Router()

router.use("/task",router);

export default router