import { useState } from "react";

// const Alphabet = () => {
//   const [alphabets, setAlphabets] = useState(["k", "d", "t", "3", "r", "d"]);
//   console.log(alphabets);

//   return (
//     <div>
//       <ul>
//         {alphabets.map((a, idx) => {
//           return <li key={idx}>{a}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

const Alphabet = () => {
  // 배열(state)에 고유 id 를 갖도록 설정
  const [alphabets, setAlphabets] = useState([
    { id: 1, alpha: "k" },
    { id: 2, alpha: "d" },
    { id: 3, alpha: "t" },
    { id: 4, alpha: "3" },
    { id: 5, alpha: "r" },
    { id: 6, alpha: "d" },
  ]);
  console.log(alphabets);
  const [inputAlpha, setInputAlphabets] = useState("");
  const [nextId, setnextId] = useState(7);

  const addAlpha = () => {
    // 기존의 alphabets state에 새로 입력된 input 값 추가
    const newAlpha = alphabets.concat({
      id: nextId,
      alpha: inputAlpha,
    });
    setnextId(nextId + 1); // 다음 항목 id를 위해 1증가
    setAlphabets(newAlpha); // alphabets state에 newAlpha 추가
    setInputAlphabets(""); // input 초기화
  };

  const deleteAlpha = (id) => {
    // console.log(">>>", id);
    const updatedAlpha = alphabets.filter((a) => a.id !== id);
    // const updatedAlpha = alphabets.filter((a) => a.id === id); // << 더블클릭 한 친구만!!! 살아남아따
    setAlphabets(updatedAlpha);
  };

  return (
    <div>
      <input
        type="text"
        value={inputAlpha}
        onChange={(e) => setInputAlphabets(e.target.value)}
      />
      <button onClick={addAlpha}>ADD</button>

      <ul>
        {alphabets.map((a) => {
          // a => {id: n, alpha:xxx }
          return (
            <li
              key={a.id}
              onDoubleClick={() => {
                deleteAlpha(a.id);
              }}
            >
              {a.alpha}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Alphabet;
