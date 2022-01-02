import React, { useEffect, useState } from "react";
import MeditationTimer from "../MeditationTimer/MeditationTimer";

const CountDownThree = () => {
  const [counter, setCounter] = useState(3);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    if (counter === 0) setFlag(false);
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div>
      {flag && <div>{counter}</div>}
      {!flag && (
        <div>
          <MeditationTimer />
        </div>
      )}
    </div>
  );
};

export default CountDownThree;
