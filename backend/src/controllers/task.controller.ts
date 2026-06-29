import type{ NextFunction, Request, Response } from "express";
import Task from "../models/Task.js";
import { createTaskSchema } from "../validators/task.validator.js";

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction
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
  next(error);
}
};
export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const task =
      await Task.findByIdAndDelete(
        req.params.id
      );

    if (!task) {
      return res.status(404).json({
        success: false
      });
    }

    return res.json({
      success: true
    });
  } catch (error) {
  next(error);
}
};

export const toggleTask = async (req: Request, res: Response, next: NextFunction) => {
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
  } catch (error) {
  next(error);
}
};
export const getTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tasks = await Task.find().sort({
      createdAt: -1
    });

    return res.json({
      success: true,
      data: tasks
    });
  } catch (error) {
  next(error);
}
};