import React from "react";

class ClassBind extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "KDT3rd",
    };

    this.printConsole = this.printConsole.bind(this);
  }

  // printConsole() {
  // console.log(">>>", this); // undefined -> bind 작업 필요
  // console.log(">>>", this.state);
  // }

  // bind가 귀찮다면 화살표 함수로 해결 가능~
  printConsole = () => {
    console.log();
  };

  render() {
    return (
      <div>
        <button onClick={this.printConsole}>printConsole</button>
      </div>
    );
  }
}

export default ClassBind;
