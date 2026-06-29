import { Task } from "@/types/task";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({
  task,
  onToggle,
  onDelete,
}: TaskItemProps) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-xl
        border
        border-gray-200
        bg-white
        p-4
        shadow-sm
      "
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() =>
            onToggle(task._id)
          }
          className="h-4 w-4"
        />

        <span
          className={
            task.completed
              ? "text-gray-500 line-through"
              : "text-gray-900"
          }
        >
          {task.title}
        </span>
      </div>

      <button
        onClick={() =>
          onDelete(task._id)
        }
        className="
          rounded-md
          px-3
          py-2
          text-sm
          text-red-600
          hover:bg-red-50
        "
      >
        Delete
      </button>
    </div>
  );
}