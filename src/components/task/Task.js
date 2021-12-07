import react from "react";
import './Tasck.css'

function  Task(){

const steps =["xx","yy","bb"]
const loding = true;
    return (<div ><div class="task">
    <div class="title">
        Learn Html {steps.map(e=><li>{e}</li>)}
        {loding ? <div> lodinnnnn</div>: <p>ddd</p>}
        {loding && <div> lodinnnnn</div>}
    </div>
    <div class="actions">
        <span>delete</span>
        
        <span>update</span>
    </div>
</div>
   </div>

)
     
}
export default Task