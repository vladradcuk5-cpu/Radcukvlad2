import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleComplete, onDelete }) {
  return (
    <div className="p-6">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-400 py-12 text-lg">
          Список задач порожній. Додайте першу задачу!
        </p>
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={onToggleComplete}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;