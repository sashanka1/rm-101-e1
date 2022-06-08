

import React from "react";

import styles from "./tasks.module.css";

const Tasks = (props) => {

  let data = props.pass;


  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}

        {data.map((d) => (
          <div>
            <h2>{d} </h2>
          </div>
        ))}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

  
export default Tasks;
