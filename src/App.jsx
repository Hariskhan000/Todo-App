import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import Todoitems from "./Components/Todoitems";
import Welcomemessage from "./Components/Welcomemessage";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [todoitems, setTodoitems] = useState([]);
  const handlenewItem = (itemName, itemDuedate) => {
    const newTodoitems = [
      ...todoitems,
      { name: itemName, dueDate: itemDuedate },
    ];
    setTodoitems(newTodoitems);
  };

  const handleDeleteitem = (todoitemName) => {
    const newTodoitems = todoitems.filter(item => item.name !== todoitemName);
    setTodoitems(newTodoitems)

    console.log(`item deleted ${todoitemName}`);
  };
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewitem={handlenewItem} />

      {todoitems.length === 0 && <Welcomemessage />}
      <Todoitems todoItem={todoitems} onDeleteClicked={handleDeleteitem} />
    </center>
  );
};

export default App;
