import { Router } from "express";
import { createTask, getTasks, toggleTask, deleteTask } from "../controllers/task.controller.js";


const router = Router();

router.post("/", createTask);
router.get("/", getTasks);
router.patch("/:id", toggleTask);
router.delete("/:id", deleteTask);
export default router;