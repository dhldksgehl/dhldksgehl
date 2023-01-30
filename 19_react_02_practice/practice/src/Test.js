import React from "react";

class Test extends React.Component {
  // 클래스형 컴포넌트 render() 필수
  render() {
    const name = "김현아";

    const my_style = {
      backgroundColor: "blue",
      color: "orange",
      fontSize: "40px",
      padding: "12px",
    };
    return (
      <>
        <div style={my_style}>{name}</div>
      </>
    );
  }
}

export default Test;
