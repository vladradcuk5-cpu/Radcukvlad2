src/App.jsx

```jsx
import Header from './components/Header'
import Footer from './components/Footer'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Statistics from './components/Statistics'
import { TaskProvider } from './context/TaskContext'

function App() {
  return (
    <TaskProvider>
      <div className="container">
        <Header />
        <TaskForm />
        <Statistics />
        <TaskList />
        <Footer />
      </div>
    </TaskProvider>
  )
}

export default App
```
