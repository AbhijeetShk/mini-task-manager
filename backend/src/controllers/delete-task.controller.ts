import type { Request, Response } from "express";
import Task from "../models/Task.js";
export const deleteTask = async (
  req: Request,
  res: Response
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
  } catch {
    return res.status(500).json({
      success: false
    });
  }
};