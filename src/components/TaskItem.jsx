function TaskItem({ task, onToggleComplete, onDelete }) {
  return (
    <div className={`flex items-center gap-4 p-5 rounded-xl border transition-all duration-200
      ${task.completed 
        ? 'bg-gray-50 border-gray-200' 
        : 'bg-white border-gray-200 hover:shadow-md'}`}>

      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
        className="w-6 h-6 accent-blue-600 cursor-pointer"
      />

      <div className="flex-1 min-w-0">
        <p className={`text-lg break-words ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
          {task.title}
        </p>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-600 hover:bg-red-50 p-3 rounded-lg transition"
        title="Видалити"
      >
        🗑️
      </button>
    </div>
  );
}

export default TaskItem;