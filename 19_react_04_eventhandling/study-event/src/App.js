import "./App.css";
import SyntheticEvent from "./SyntheticEvent";
import NumberTest from "./NumberTest";
import ClassBind from "./ClassBind";

function App() {
  return (
    <div className="App">
      <SyntheticEvent></SyntheticEvent>
      <hr />
      <NumberTest></NumberTest>
      <hr />
      <ClassBind></ClassBind>
    </div>
  );
}

export default App;
