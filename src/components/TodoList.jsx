import React, { useState } from "react";
import Title from "./Title";
import Form from "./Form";
import Board from "./Board";
import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todoName: "투두 구현하기",
      todoBody: "겁나 어렵다",
      isDone: false,
    },
    {
      id: 2,
      todoName: "투두 구현하기",
      todoBody: "겁나 어렵다",
      isDone: true,
    },
  ]);
  return (
    <div className="layout">
      <Title />
      <Form setTodos={setTodos} todos={todos} />
      <Board todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default TodoList;
