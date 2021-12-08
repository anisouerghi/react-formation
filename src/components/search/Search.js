import react from "react";
import './Search.css'

function  Search(){
    const  addtask ="add task"
    const steps =["xx","yy","bb"]
    const loding = true;
    return  ( <form action="" class="form">
    <input type="text" name="task" id=""/>
    <button type="submit">{addtask}</button>
    {steps.map(e=><li>{e}</li>)}
        {loding ? <div> lodinnnnn</div>: <p>ddd</p>}
        {loding && <div> lodinnnnn</div>}
    
</form>)
}
export default Search