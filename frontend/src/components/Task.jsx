// import "../assets/button.css"

import TaskButton from "./TaskButton";

export default function Task({name, createdAt, completed}) {
  return (
    <div className="task-container">
        <TaskButton></TaskButton>
        <p>{name}</p>
        <p>{createdAt}</p>
        <p>{completed}</p>
    </div>
  )
}
