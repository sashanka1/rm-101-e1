

import styles from "./counter.module.css";

const Counter = () => {

  let count =0;
  return (  
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button" >+</button>
      <span data-testid="task-counter-value">{count}</span>
      <button data-testid="task-counter-decrement-button" > -</button>
    </div>
     
  );
};

export default Counter;
