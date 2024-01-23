import React from "react";
import TodoItem from "./TodoItem";

const Todoitems = ({ todoItem, onDeleteClicked }) => {
  return (
    <div className="item-container">
      {todoItem.map((item) => (
        <TodoItem  todoname={item.name} tododate={item.dueDate} onDeleteClicked={onDeleteClicked} />
      ))}
    </div>
  );
};

export default Todoitems;
