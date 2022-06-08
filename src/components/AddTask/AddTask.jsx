
import React from "react";
import styles from "./addTask.module.css";

import { useState } from 'react'
import Tasks from "../Tasks/Tasks";
import { TaskHeader } from "../TaskHeader";


const AddTask = () => {

    const[Value,setValue]=useState(1)
  const [todo,Settodo]=useState("");
  const[array,setArray]=useState([]);

  const invalue =(e)=>{
    Settodo(e.target.value);
      
  }
  const store =()=>{
setArray([todo,...array])

   console.log(array);
   
   setValue(Value+1);
  
  }

  return (
   <>
   <TaskHeader v={Value}/>
    
     <div className={styles.todoForm}>
     
      <input data-testid="add-task-input" type="text" onChange={invalue} />
      <button data-testid="add-task-button"  onClick={store}>+</button>
      </div>
  
    <Tasks pass={array}/>
    
   </>
  );
};

export default AddTask;
