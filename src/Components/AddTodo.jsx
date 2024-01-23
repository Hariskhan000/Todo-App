import React, { useState } from "react";

const AddTodo = ({ onNewitem }) => {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleButtonClicked = () => {
    onNewitem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="row kg-row">
      <div className="col-4">
        <input
          type="text"
          value={todoName}
          placeholder="Enter Your Todo Here?"
          onChange={handleNameChange}
        />
      </div>
      <div className="col-4">
        <input type="date" value={dueDate} onChange={handleDateChange} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success kg-button"
          onClick={handleButtonClicked}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
