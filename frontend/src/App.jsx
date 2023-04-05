import React from 'react'
import Task from './components/Task'
import tasks from './utils/tasks'

export default function App() {
  return (
    <div className='app'>
      <h1>Hola</h1>
      <div className='collection-name'> {/*ESTO TIENE QUE SER UN COMPONENTE*/}
      </div>
      <ul className='tasks'>
        {
          tasks.map(task => {
            return(
              <Task name={task.name} createdAt={task.createdAt} completed={task.completed}></Task>
            )
          })
        }
      </ul>
    </div>
  )
}
