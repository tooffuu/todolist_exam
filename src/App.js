import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      alert("1글자 이상 입력해주세요");
      return;
    }

    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
    alert("등록됨");
  };
  return (
    <div>
      <h1>*할 일*</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={todo}
          placeholder="할 일을 적어주세요"
        />
        <button
          style={{
            width: "80px",
            backgroundColor: "gold",
            borderRadius: "10px",
            marginLeft: "6px",
          }}
        >
          등록
        </button>
      </form>
      <hr></hr>
      <button
        onClick={() => {
          console.log(todos);
        }}
      >
        check
      </button>
      <hr />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
