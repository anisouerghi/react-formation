import React from 'react'
import './Task.css'
export default function Task(props) {  

  const  handleDeleteask=()=> {
    props.deleteTask(props.id)
    } 

  const renderActions = ()=>{
    return (
      <div className="actions">
        <button onClick={handleDeleteask} className="button">Delete</button>
        <span>update</span>
      </div>
    )
  }
    return (
      <div className="task">
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

        {renderActions()}
      </div>
    )
}


