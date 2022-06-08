import React from "react";

import styles from "./taskApp.module.css";
import AddTask from "./AddTask/AddTask"


const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
     
      {/* Add Task */}
      {/* Tasks */}
      <AddTask/>
    </div>
  );
};

export default TaskApp;
