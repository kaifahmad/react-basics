import React, { useState } from "react";

function Counter2() {
  const [counter, setCounter] = useState(0);
  const incrementConter = () => {
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
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

export default Counter2;
