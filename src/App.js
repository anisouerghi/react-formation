import React, { useEffect } from "react"
import "./App.css"
import TaskForm from "./components/taskForm/TaskForm"
import TasksList from "./components/tasksList/TasksList"
import { useState } from "react"
import Task from "./components/task/Task"
import { fetchTasks } from "./services/tasks.service"
import { addTask as addTasksFromservice, deleteTask as deleteTasksFromservice, fetchTasksByFilter,   updateTask as updateTaskFromService } from "./services/tasks.service"
function App() {
  const [isVisible,SetVisible] = useState(true)
  const [loding,setLoding] = useState(false)
  const [erreur,setErreur] = useState("erreur")
  const [searchValue,setSearchValue] = useState("")

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

// //2 eme form
//   useEffect(() => {
//     const fetchData = async()=>{
//       setLoding(true)
//       try {
//        const result = await fetchTasks() 
//        setTasks(result)
//        setLoding(false)
//        console.log("use effect....sans probleme")
//       } catch (error) {
//         console.log("erreur")
//         setErreur("erreur....")
//         setLoding(false)
//       }
//     }
//     console.log("use effect....")
//     fetchData()
//   }, [])


const  handleChange=(e)=> {
  console.log(e.target.value)
   setSearchValue( e.target.value);
   console.log(searchValue)
 } 
 
  //3 eme form
  // useEffect(() => {
  //   console.log("test...",searchValue)
  //   const fetchData = async()=>{
  //     setLoding(true)
  //     if(searchValue.length===0){
  //       setTasks([])
  //       setLoding(false)
  //     } else {
  //       const result = await  fetchTasksByFilter(searchValue)
  //       console.log("tett",searchValue)
  //       setTasks(result)
  //       setLoding(true)
  //     }
      
  //   }
  //   console.log("use effect....")
  //   fetchData()
  // }, [searchValue])


// 4eme 
  useEffect(() => {
    let didCancel = false
    const fetchData = async () => {
      setLoading(true)
      if (!searchValue) {
        setTasks([])
        setLoding(false)
      } else {
        const result = await fetchTasks(searchValue)
        console.log("result: ", didCancel)
        if (!didCancel) {
          setTasks(result)
          setLoding(false)
        }
      }
    }
    // console.log("useEffect:", searchValue)
    fetchData()

    return () => {
      console.log("cleanup: ", searchValue)
      didCancel = true
    }
  }, [searchValue])

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

  const sayHello = () =>{console.log("____")}
  const sayHello1 = () =>{alert("_____")}
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
      <input  value={searchValue} onChange={(e)=>handleChange(e)} type="text" name="task" id="" />
      {loding  && <div>Looding......</div>} 
     
      {!loding  && isVisible && (<TaskForm addTask={addTask}  sayHello={sayHello} /> )}
      {erreur  && isVisible && <div>{erreur}</div>} 
       <TasksList deleteTask={deleteTask} updateTask={updateTask}  tasks={tasks} />
    </div>
  )
}

export default App
