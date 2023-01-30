import React from "react";

class Component extends React.Component {
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state;
    return (
      <>
        const {number} = this.state
        <button onClick={() => this.setState({ number: number + 2 })}>
          +2
        </button>
        <button onClick={() => this.setState({ number: number - 1 })}>
          -1
        </button>
      </>
    );
  }
}

export default Component;
