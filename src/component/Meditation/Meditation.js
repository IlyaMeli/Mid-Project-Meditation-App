import React, { useEffect, useState } from "react";

const Meditation = () => {
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return <div>{counter === 0 ? "START" : counter}</div>;
};

export default Meditation;
