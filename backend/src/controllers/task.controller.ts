import type{ Request, Response } from "express";
import Task from "../models/Task.js";
import { createTaskSchema } from "../validators/task.validator.js";

export const createTask = async (
  req: Request,
  res: Response
) => {
  try {
    const parsed =
      createTaskSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        errors: parsed.error.flatten()
      });
    }

    const task = await Task.create({
      title: parsed.data.title
    });

    return res.status(201).json({
      success: true,
      data: task
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create task"
    });
  }
};