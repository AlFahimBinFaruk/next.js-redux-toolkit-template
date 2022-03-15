import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { managecount } from "../features/counter";
import styles from "../styles/Counter.module.css";

function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(managecount(counterValue));
  }, [counterValue, dispatch]);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => setCounterValue(counterValue - 1)}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => setCounterValue(counterValue + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
