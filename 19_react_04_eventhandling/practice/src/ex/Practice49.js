import React from "react";
import { useState } from "react";

class Practice49 extends React.Component {
  state = {
    style: {
      color: "black",
    },
  };

  render() {
    const { style } = this.state.style;
    return (
      <div>
        <h1>실습 49</h1>
        <p style={style}>검정색 글씨</p>
        <button onClick={() => this.setState({ color: "red" })}>빨간색</button>
        <button onClick={() => this.setState({ color: "blue" })}>파란색</button>
      </div>
    );
  }
}

// const Practice49 = () => {
//   const [text, setText] = useState("검정색 글씨");
//   const [color, setColor] = useState("black");

//   const red = () => {
//     setText("빨간색 글씨");
//     setColor("red");
//   };

//   const blue = () => {
//     setText("파란색 글씨");
//     setColor("blue");
//   };
//   return (
//     <>
//       <h1>실습 49</h1>
//       <p style={{ color: color }}>{text}</p>
//       <button onClick={red}></button>
//       <button onClick={blue}></button>
//     </>
//   );
// };

export default Practice49;
