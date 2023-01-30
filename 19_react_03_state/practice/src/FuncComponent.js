// import { useState } from "react";
import React from "react";

function FuncComponent() {
  const [number, setNumber] = React.useState(0);
  const Increase = () => setNumber(number + 1);
  const Descrease = () => setNumber(number - 2);
  return (
    <>
      <h1>{number}</h1>
      <button onClick={Increase}>+1</button>
      <button onClick={Descrease}>-2</button>
    </>
  );
}

export default FuncComponent;
