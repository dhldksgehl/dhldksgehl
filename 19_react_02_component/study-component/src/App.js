import "./App.css";
import Button from "./Button.css";
import ClassComponent from "./ClassComponent";
import FuncComponent from "./FuncComponent";

function App() {
  return (
    <div className="App">
      <ClassComponent />
      {/* <ClassComponent></ClassComponent> */}

      <hr />
      <FuncComponent name="KDT3기" students={100}></FuncComponent>

      <Button link="https://www.google.com">구글</Button>
      <Button link="https://www.daum.com">다음</Button>
    </div>
  );
}

export default App;
