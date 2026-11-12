import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState<string[]>([])
  function addTask() {
    if (task.trim() === '') {
      return
    }

    setTasks([...tasks, task])
    setTask('')
  }


  return (
    <div>
      <h1>Mon gestionnaire de tâches</h1>

      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="Écris une tâche..."
      />
      <button onClick={addTask}>
       Ajouter
      </button>
      <ul>
  {tasks.map((taskItem, index) => (
    <li key={index}>{taskItem}</li>
  ))}
</ul>
      <p>Ta tâche : {task}</p>
    </div>
  )
}
export default App
