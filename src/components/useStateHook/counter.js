import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const incrementConter = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <h1>Hello Count value : {counter}</h1>
      <button type="button" onClick={incrementConter}>
        Click Me!!!
      </button>
    </div>
  );
}

export default Counter;
