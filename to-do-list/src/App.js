import logo from "./logo.svg";
import "./style/App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useCallback } from "react";
import TodoList from "./components/TodoList";

const ItemsInitialState = [
  {
    id: 1,
    text: "Learn JS",
    completed: false,
  },
  {
    id: 2,
    text: "Learn React",
    completed: false,
  },
  {
    id: 3,
    text: "Build a React App",
    completed: false,
  },
];

function App() {
  const title = "Things to do";
  const [items, updateItems] = useState(ItemsInitialState);
  const addNewItem = useCallback(
    (text) => {
      updateItems((items) => {
        const nextId = items.length + 1;
        const newItem = {
          id: nextId,
          text: text,
        };
        return [...items, newItem];
      });
    },
    [updateItems]
  );

  return (
    <div className="container">
      <div className="row">
        <TodoList title={title} items={items} addNewItem={addNewItem} />
      </div>
    </div>
  );
}

export default App;
