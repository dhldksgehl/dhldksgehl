import grass from "./img/grass.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="c_1">
        <div className="e_1"></div>
        <div className="e_2"></div>
      </div>
      <div className="c_2"></div>
      <div className="c_3"></div>
      <div className="c_4"></div>
      <img src={grass} alt="풀이미지" />
      <div className="c_5"></div>
    </div>
  );
}

export default App;
