import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      onAddTask(title.trim());
      setTitle(''); // очищення поля після додавання
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 border-b">
      <div className="flex gap-3">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Введіть назву задачі..."
          className="flex-1 px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 text-lg"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition"
        >
          Додати
        </button>
      </div>
    </form>
  );
}

export default TaskForm;