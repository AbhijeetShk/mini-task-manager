"use client";

import { useEffect, useState } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import {
  getTasks,
  createTask,
  toggleTask,
  deleteTask,
} from "@/lib/api";

import { Task } from "@/types/task";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
 console.log("GET /api/tasks hit");
      setTasks(response.data);
    } catch (error) {
      console.error("Failed to fetch tasks", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAdd = async (title: string) => {
    try {
      await createTask(title);

      await fetchTasks();
    } catch (error) {
      console.error("Failed to create task", error);
    }
  };

  const handleToggle = async (id: string) => {
    try {
      await toggleTask(id);

      await fetchTasks();
    } catch (error) {
      console.error("Failed to update task", error);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmed) return;

    try {
      await deleteTask(id);

      await fetchTasks();
    } catch (error) {
      console.error("Failed to delete task", error);
    }
  };

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-2xl px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Mini Task Manager
          </h1>

          <p className="mt-2 text-gray-500">
            Organize your tasks efficiently
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md">
          <TaskForm onAdd={handleAdd} />

          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <span>
              Total Tasks: {tasks.length}
            </span>

            <span>
              Completed: {completedTasks}
            </span>
          </div>

          <div className="mt-6">
            {loading ? (
              <div className="py-10 text-center text-gray-500">
                Loading tasks...
              </div>
            ) : (
              <TaskList
                tasks={tasks}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}