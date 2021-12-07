import react from "react";
import './Search.css'

function  Search(){
    const  addtask ="add task"
    return  ( <form action="" class="form">
    <input type="text" name="task" id=""/>
    <button type="submit">{addtask}</button>
</form>)
}
export default Search