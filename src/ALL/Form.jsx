import React, { useState } from "react";
import "./Form.css";

let number = 3;
function Form({ setTodos, todos }) {
  const initialState = {
    id: 0,
    todoName: "",
    todoBody: "",
    isDone: false,
  };

  const [todo, setTodo] = useState(initialState);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (todo.todoName.trim() === "" || todo.todoBody.trim() === "") return;
    setTodos([...todos, { ...todo, id: number }]);
    setTodo(initialState);
    number++;
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-form">
        <label className="form-label">Todo</label>
        <input
          type="text"
          name="todoName"
          value={todo.todoName}
          className="textbox"
          onChange={onChangeHandler}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="todoBody"
          value={todo.todoBody}
          className="textbox"
          onChange={onChangeHandler}
        />
      </div>
      <button className="formbtn">입력하기</button>
    </form>
  );
}
export default Form;
