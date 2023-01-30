import "./App.css";
import Counter from "./Counter";
import CounterFunction from "./CounterFuntion";
import SayFunction from "./SayFunction";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />

      <SayFunction />
      <hr />

      <CounterFunction value="일 더하기" />
    </div>
  );
}

export default App;
