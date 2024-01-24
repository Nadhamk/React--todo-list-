import React, { useEffect, useState } from 'react'
import Listtask from './Listtask'
import Addtask from './Addtask'
import './Todo.css';


const Todo = () => {
    const[tasks,setTask]=useState([
    ]);
      useEffect(()=>{
        document.title=`You have ${tasks.length} pending task(s)`;
      })


    const addTask=(title)=>{
        const newTask=[...tasks,{title}]
        setTask(newTask);
    }

    const removeTask=(index)=>{
      const newTask=[...tasks]
      newTask.splice(index,1)
      setTask(newTask);
  }
  return (


    <>

    <div className='todo-container'>
        <div className='header'>TODO APP</div>
        <Addtask addTask={addTask} />

        {tasks.map((task,index)=>(
        <Listtask task={task} removeTask={removeTask} index={index} key={index} />
        ))} 


    </div>
    </>
  )
}

export default Todo