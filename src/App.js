import React, { useEffect } from "react"
import "./App.css"
import TaskForm from "./components/taskForm/TaskForm"
import TasksList from "./components/tasksList/TasksList"
import { useState } from "react"
import Task from "./components/task/Task"
import { fetchTasks } from "./services/tasks.service"
import { addTask as addTasksFromservice, deleteTask as deleteTasksFromservice, updateTask as updateTaskFromService } from "./services/tasks.service"
function App() {
  const [isVisible,SetVisible] = useState(true)
  const [loding,setLoding] = useState(false)
  const [erreur,setErreur] = useState("erreur")
  const toggleVisible=()=> {  SetVisible (!isVisible); console.log(isVisible)}

  const steps = ["Enter the task title", "Click on add task"]

  // const addTask=(title) => { const newTasks = {id:""+tasks.length +1 , title: title}
  // setTasks(tasks.concat(newTasks))
  // }



    const addTask = async(title,duration)=>{
      try {
     //  setLoding(true)
       const newTask = await addTasksFromservice({title,duration}) 
        setTasks([...tasks,newTask])
      } catch (error) {
        console.log("erreur")
      }
    }
 

    const deleteTask = async(id)=>{
      try {
     //  setLoding(true)
        await deleteTasksFromservice(id) 
       const newtasks= tasks.filter((task)=> task.id!==id)
       setTasks(newtasks)
       setLoding(false)
      } catch (error) {
        console.log("erreur")
      }
    }

    const updateTask = async (id, title, duration) => {
      try {
        setLoding(true)
        const newTask = await updateTaskFromService(id, {
          title,
          duration,
        })
        const newTasks = tasks.map((task) => (task.id === id ? newTask : task))
        setTasks(newTasks)
        setLoding(false)
      } catch (e) {
        console.log("error")
      }
    }
  

//   const deleteTask=(id) => { 
//      const newtask = tasks.filter((task)=> task.id != id)
//      setTasks(newtask)
//  }

  // async function fetchData()
  // { const tasks = await fetchTasks()
  //   setTasks(tasks) 
  // }

  // useEffect(() => {
  //   fetchData()
  //   console.log("hello user effect one.......")
  // }, [])


  useEffect(() => {
    const fetchData = async()=>{
      setLoding(true)
      try {
       const result = await fetchTasks() 
       setTasks(result)
       setLoding(false)
       console.log("use effect....sans probleme")
      } catch (error) {
        console.log("erreur")
        setErreur("erreur....")
        setLoding(false)
      }
    }
    console.log("use effect....")
    fetchData()
  }, [])

//   const updateTask=(id,title,duration) => { 
//     console.log("title.....", title)
//     const newtask = tasks.filter((task)=> task.id == id)
//     const oldtask = tasks.filter((task)=> task.id != id)
    
//     const list =[
//       {id: id,
//       title: title,
//       duration: duration,
//       type: "test type",
//       date: "2021-10-11",
//       description: newtask.description
//       }
//     ];
//     setTasks(list.concat(oldtask ))
//     console.log("tasks..",tasks)
 
//  }

//  const updateTask=(newtask) => { 
// const newtasks=tasks.map(task=>{
//   if(task.id===newtask.id) { return newtask} return task
// })}
  
 
 const t="anis"
 const[tasks, setTasks]= useState([])

  const sayHello = () =>{console.log("Hello")}
  const sayHello1 = () =>{alert("Hello anis")}
  return (
    <div className="tasks-list" style={{ backgroundColor: "white" }}  >
      To add a task
      <div><button type="button" className="btn btn-info btn-sm m-1" onClick={toggleVisible}> Activate</button></div>
      <div><button type="button" className="btn btn-info btn-sm m-1" onClick={sayHello1}> Alert</button></div>
      <ul>
        {steps.map((step) => (
          <li>{step}</li>  
        ))}
      </ul>
      {loding  && <div>Looding......</div>} 
     
      {!loding  && isVisible && (<TaskForm addTask={addTask}  sayHello={sayHello} /> )}
      {erreur  && isVisible && <div>{erreur}</div>} 
       <TasksList deleteTask={deleteTask} updateTask={updateTask}   tasks={tasks} />
    </div>
  )
}

export default App
