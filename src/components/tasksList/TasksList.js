import React from "react"
import Task from "./../task/Task"
export default function TasksList(props) {
// 2ème solution avec destructuring
// export default function TasksList({tasks}) {
 
  return (
    <div className="tasks-list">
      {props.tasks.map((task, index) => (
        // 2ème solution avec destructuring
        //{tasks.map((task, index) => (
        <Task 
          key={index}
          id={task.id}
          title={task.title}
          duration={task.duration}
          deleteTask={props.deleteTask}
          updateTask={props.updateTask}
          type={task.type}
          date={task.date}
        >
          {task.description}
        </Task>
      ))}
    </div>
  )
}
