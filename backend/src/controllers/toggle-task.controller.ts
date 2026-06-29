import type { Request, Response } from "express";
import Task from "../models/Task.js";
export const toggleTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
      });
    }

    task.completed = !task.completed;

    await task.save();

    return res.json({
      success: true,
      data: task,
    });
  } catch {
    return res.status(500).json({
      success: false,
    });
  }
};
