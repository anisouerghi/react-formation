import React from 'react'
import './Task.css'
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Task(props) {  

  const [isUpdate,SetUpdate] = useState(true)
  const [title,setTitle] = useState(props.title)
  const [duration,setDuration] = useState(props.duration)

  const toggleUpdate=()=> {  SetUpdate (!isUpdate); console.log(isUpdate)}

    const  handleDeleteask=()=> {
      props.deleteTask(props.id)
    } 
    const  handleUpdatetask=()=> {
      console.log("----------",handleUpdatetask)
      props.updateTask(props.id,title,duration)
    } 
    const  handleChange=(e)=> {
      console.log(e.target.value)
       setTitle( e.target.value);
       console.log(title)
     }

     
     const  handleChangeDuration=(e)=> {
      console.log(e.target.value)
       setDuration( e.target.value);
       console.log(duration)
     }
  const renderActions = ()=>{
    return (
      <div className="m-3">
        <button type="button" className="btn btn-primary btn-sm m-1"onClick={handleDeleteask} >Delete</button>
        <button type="button" className="btn btn-danger btn-sm m-1" onClick={ toggleUpdate,handleUpdatetask }>Update</button>
  
      </div>
    )
  }
    return (
      <div className="card m-5">
      {isUpdate &&(<div>
        <div
          className={`title ${props.type === "beginner" ? "customTask" : ""}`}
        >
          {props.title} ({props.duration} mn)
        </div>
   
        {props.type && (
          <div className="sub-title">
            {props.type} - {props.date}
            {props.children}
          </div>
        )}

   </div>)}
        <form>
          <label>
            Title :
           <input value={title} onChange={(e)=>handleChange(e)} type="text" name="name" />
          </label>
          <label>
            Duration :
           <input value={duration} onChange={(e)=>handleChangeDuration(e)} type="text" name="name" />
          </label>
        </form>

        {renderActions()}
      </div>
    )
}


