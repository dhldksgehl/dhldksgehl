import React from "react";

class Handler_ex extends React.Component {
  state = {
    text: "Hello World",
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <h1>실습 48</h1>
        <h2>{text}</h2>
        <button onClick={() => this.setState({ text: "Goodbye World!" })}>
          변신!
        </button>
      </div>
    );
  }
}

export default Handler_ex;
