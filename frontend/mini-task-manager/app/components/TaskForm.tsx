"use client";

import { FormEvent, useState } from "react";

interface TaskFormProps {
  onAdd: (title: string) => Promise<void>;
}

export default function TaskForm({
  onAdd,
}: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!title.trim()) return;

    try {
      setLoading(true);

      await onAdd(title);

      setTitle("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3"
    >
      <input
        type="text"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        placeholder="Enter a task..."
        className="
          flex-1
          rounded-lg
          border
          border-gray-300
          px-4
          py-3
          outline-none
          focus:ring-2
          focus:ring-black
        "
      />

      <button
        disabled={loading}
        className="
          rounded-lg
          bg-black
          px-5
          py-3
          text-white
          transition
          hover:bg-gray-800
          disabled:opacity-50
        "
      >
        {loading ? "Adding..." : "Add"}
      </button>
    </form>
  );
}