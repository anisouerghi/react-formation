import React, {useEffect} from 'react'
import './TaskForm.css'
import { useState } from "react"
export default function TaskForm(props) {
  props.sayHello()
  const addTask="Add a task"
  const[title, setTitle]= useState("Default title")

 const  handleChange=(e)=> {
   console.log(e.target.value)
    setTitle( e.target.value);
    console.log(title)
  } 

// Similar to componentDidMount and componentDidUpdate:
useEffect(() => {
  // Update the document title using the browser API
 console.log("Hello word........")
});



  const  handleAddTask=()=> {
   props.addTask(title)
   } 

    return (
      <div className="task-formca">
        <input  value={title} onChange={(e)=>handleChange(e)} type="text" name="task" id="" />
        <button onClick={handleAddTask} className="button">{addTask}</button>
         <div>{props.test}</div>
      </div>
    )
}
