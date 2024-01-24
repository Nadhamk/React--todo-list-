import React, { useState } from 'react'
import './Todo.css';


const Addtask = ({addTask}) => {
    const[value,setvalue]=useState("")
    const additem=()=>{
        addTask(value);
        setvalue("")
    }
  return (
    <div className='input-container'>Add task
    <input type='text' className='input' placeholder='Add new task'
    value={value}
    onChange={(e)=>{setvalue(e.target.value);}}
    />
    <button onClick={additem} className='add-btn'>Add</button>
    </div>
  )
}

export default Addtask