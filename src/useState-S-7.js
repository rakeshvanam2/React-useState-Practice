import React, { useState, useEffect } from "react";

const Data = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Previous State", count - 1);
    console.log("Current State", count);
  }, [count]);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default Data;
