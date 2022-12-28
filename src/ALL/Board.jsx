import React from "react";
import "./Board.css";
import Card from "./Card";

function Board({ todos, setTodos }) {
  const onDeleteHanlder = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(newTodos);
  };

  const onEditHandler = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });

    setTodos(newTodos);
  };

  return (
    <div className="board-container">
      <h2 className="board-title">...Ing🤔</h2>
      <div className="board-wrapper">
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <Card
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="board-title">Complete!!🥰</h2>
      <div className="board-wrapper">
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <Card
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default Board;
