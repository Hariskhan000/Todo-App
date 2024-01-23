import React from "react";
const TodoItem = ({ todoname, tododate, onDeleteClicked }) => {
  return (
    <div class="row kg-row">
      <div class="col-4 kg-col">{todoname}</div>
      <div class="col-4 kg-col">{tododate}</div>
      <div class="col-2">
        <button
          type="button"
          className="btn btn-danger kg-button"
          onClick={() => onDeleteClicked(todoname)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
