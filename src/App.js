import React from "react"
import "./App.css"
import TaskForm from "./components/taskForm/TaskForm"
import TasksList from "./components/tasksList/TasksList"
import { useState } from "react"
import Task from "./components/task/Task"

function App() {
  const [isVisible,SetVisible] = useState(true)

  const toggleVisible=()=> {  SetVisible (!isVisible); console.log(isVisible)}

  const steps = ["Enter the task title", "Click on add task"]

  const addTask=(title) => { const newTasks = {id:""+tasks.length +1 , title: title}
  setTasks(tasks.concat(newTasks))
  }

  const deleteTask=(id) => { 
     const newtask = tasks.filter((task)=> task.id != id)
     setTasks(newtask)
  
  }
 

  const[tasks, setTasks]= useState(
  [
    {
      id: "1",
      title: "Learn html",
      duration: 60,
      type: "beginner",
      date: "05/04/2020",
      description:
        "HTML is the standard markup language for documents designed to be displayed in a web browser"
    },
    {
      id: "2",
      title: "Learn react",
      duration: 30,
      type: "intermediate",
      date: "05/04/2020",
      description: "React is a JavaScript library created by Facebook"
    },
    {
      id: "3",
      title: "Learn node",
      duration: 50,
      type: "Advanced",
      date: "05/04/2020",
      description: "Node.js is an open source server environment; Node.js is free"
    }
  
])
  const sayHello = () =>{console.log("Hello")}
 
  return (
    <div className="tasks-list" style={{ backgroundColor: "white" }}  >
      To add a task
      <div><button onClick={toggleVisible}>
  Activate
</button></div>
      <ul>
        {steps.map((step) => (
          <li>{step}</li>
        ))}
      </ul>
    {isVisible && (<TaskForm addTask={addTask}  sayHello={sayHello} /> )}
      <TasksList deleteTask={deleteTask}  tasks={tasks} />
    </div>
  )
}

export default App
