import type { Request, Response } from "express";
import Task from "../models/Task.js";
export const getTasks = async (
  req: Request,
  res: Response
) => {
  try {
    const tasks = await Task.find().sort({
      createdAt: -1
    });

    return res.json({
      success: true,
      data: tasks
    });
  } catch {
    return res.status(500).json({
      success: false
    });
  }
};