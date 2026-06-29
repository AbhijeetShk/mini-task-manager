import { Router } from "express";
import { createTask } from "../controllers/task.controller.js";
import { getTasks } from "../controllers/get-tasks.js";

const router = Router();

router.post("/", createTask);
router.get("/", getTasks);
export default router;