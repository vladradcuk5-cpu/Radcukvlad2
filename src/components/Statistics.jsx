```jsx
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function Statistics() {
  const { tasks } = useContext(TaskContext)

  const completed = tasks.filter(task => task.completed).length
  const uncompleted = tasks.filter(task => !task.completed).length

  return (
    <div>
      <h3>Статистика</h3>

      <p>Всього задач: {tasks.length}</p>
      <p>Виконано: {completed}</p>
      <p>Невиконано: {uncompleted}</p>
    </div>
  )
}

export default Statistics
```