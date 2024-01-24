import React from 'react'
import './Todo.css';


 const Listtask=({task,index,removeTask})=> {

  return (
    <div className='list-task'>{task.title}
    <button className='dlt' onClick={()=>{removeTask(index)}}>Delete</button>
    </div>
  )
}

export default Listtask