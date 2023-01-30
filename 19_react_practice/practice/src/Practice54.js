import { useState, useRef } from "react";

const Practice54 = () => {
  const [inputWriter, setInputWriter] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [comments, setComments] = useState([
    { writer: "민수", title: "안뇽" },
    { writer: "지민", title: "하이하이" },
    { writer: "희수", title: "멋쟁이" },
  ]);

  const writerInputElem = useRef();
  const titleInputElem = useRef();

  const checkInputValue = () => {
    if (inputWriter.trim().length < 1) {
      // inputWriter.trim() === ''

      // input focus
      writerInputElem.current.focus();
      console.log("함수 종료함!");
      return false;
    }

    if (inputTitle.trim().length < 1) {
      // input focus
      titleInputElem.current.focus();
      console.log("함수 종료함!");
      return false;
    }

    return true;
  };
  const addComment = () => {
    console.log("함수 실행함!");
    console.log(inputWriter.length);
    console.log(inputTitle.length);

    if (!checkInputValue()) {
      // !false
      return;
    }

    let newComment = { writer: inputWriter, title: inputTitle };
    console.log(newComment);
    setInputWriter("");
    setInputTitle("");

    setComments([...comments, newComment]);

    console.log("btnclick");
  };

  return (
    <>
      <form>
        <label htmlFor="writer">작성자: </label>
        <input
          ref={writerInputElem}
          type="text"
          id="writer"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        <label htmlFor="title">제목: </label>
        <input
          ref={titleInputElem}
          type="text"
          id="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      <table border={1} style={{ margin: "30px auto", width: "500px" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((c, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{c.title}</td>
                <td>{c.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Practice54;
