import logo from "./logo.svg";
import "./style/App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useCallback } from "react";
import TodoList from "./components/TodoList";
//import {FILTER_ACTIVE} from "./services/filter"
import {getAll, createNew} from './services/todo'


const ItemsInitialState = getAll()

const FilterInitialState = "active";

function App() {
  const title = "Things to do";
  const [items, updateItems] = useState(ItemsInitialState);
  const [filter, setFilter] = useState(FilterInitialState);
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

  const changeFilter = useCallback((value) => setFilter(value), [setFilter]);

  return (
    <div className="container">
      <div className="row">
        <TodoList
          title={title}
          items={items}
          filter={filter}
          addNewItem={addNewItem}
          changeFilter={changeFilter}
        />
      </div>
    </div>
  );
}

export default App;
