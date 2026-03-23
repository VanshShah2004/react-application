import React,{useState} from 'react';

const ToDoList = ()=>{
    const [tasks,setTasks] = useState(['Go To Sleep','Brush Teeth']);

    const handleAddTask=()=>{
        const task=document.getElementById('taskInput').value;
        if (task!='') setTasks(t=>[...t,task]);
        document.getElementById('taskInput').value='';
    }

    const handleSearchTask=()=>{
        const t=document.getElementById('taskInput').value;
        setTasks(tasks.filter((task)=>task.toLowerCase().includes(t.toLowerCase())));
        document.getElementById('taskInput').value='';
    }

    const handleRemoveTask=(index)=>{
        setTasks(tasks.filter((task,i)=>{
            return i!==index
        }))
    }

    const UpTask=(index)=>{
        if(index===0) return;
        const arr=[...tasks];
        const task=arr[index];
        arr[index]=arr[index-1];
        arr[index-1]=task;
        setTasks(arr);
    }

    const DownTask=(index)=>{
        if(index==tasks.length-1) return;
        const arr=[...tasks];
        const task=arr[index];
        arr[index]=arr[index+1];
        arr[index+1]=task;
        setTasks(arr);
    }

    return(
        <div className='todo-list-application'>

            <h1>To Do List App</h1>
            <div className="todo-list-addition">

                <input type="text" placeholder="Enter the task : " id="taskInput" style={{margin:'10px'}}/>

                <button style={{backgroundColor:'green' , margin:'10px'}} onClick={handleAddTask}>+</button>
                <button style={{backgroundColor:'blue',margin:'10px'}} onClick={handleSearchTask}>Search</button>
            </div>

            <div className="todo-list-container">
                <ol>
                    {tasks.map((task,index)=>{
                        return <li key={index}>{task}
                        <button style={{margin:'10px'}} onClick={()=>handleRemoveTask(index)}>-</button>
                        <button style={{margin:'10px'}} onClick={()=>UpTask(index)}>^</button>
                        <button style={{margin:'10px'}} onClick={()=>DownTask(index)}>v</button>
                        </li>
                    })}
                </ol>
            </div>
        </div>
    )
}

export default ToDoList;