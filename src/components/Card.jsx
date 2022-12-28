import React from "react";
import "./Card.css";

const Card = ({ todo, onDeleteHanlder, onEditHandler }) => {
  return (
    <div className="todo-container">
      <div>
        <h2 className="todoCard">{todo.todoName}</h2>
        <div>{todo.todoBody}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button"
          onClick={() => onDeleteHanlder(todo.id)}
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button"
          onClick={() => onEditHandler(todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Card;
