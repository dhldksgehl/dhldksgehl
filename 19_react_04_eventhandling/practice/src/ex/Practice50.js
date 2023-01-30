import { useState } from "react";

const Practice50 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <h1>실습 50</h1>
      <h2>{visible && "안녕하세요"}</h2>
      {/* = <h2>{visible ? "안녕하세요" : ""}</h2> */}
      <button onClick={() => setVisible(!visible)}>
        {/* = <button onClick={() => setVisible(visible ? false : true)}> */}
        {visible ? "사라져라" : "나타나라"}
      </button>
    </>
  );
};

export default Practice50;
