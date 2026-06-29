import { Router } from "express";
import { createTask } from "../controllers/task.controller.js";
import { getTasks } from "../controllers/get-tasks.js";
import { toggleTask } from "../controllers/toggle-task.controller.js";

const router = Router();

router.post("/", createTask);
router.get("/", getTasks);
router.patch("/:id", toggleTask);
export default router;