import React from "react";
import Header from "./Header";
import TodoItem from "./TodoItem";
import Footer from "./Footer";
import {applyFilter} from "../services/filter"

function TodoList(props) {
  const { title, items, addNewItem, filter, changeFilter } = props;
  const count = items.length;
  const filteredList = applyFilter(items, filter);
  return (
    <div className="todolist">
      <Header title={title} addNewItem={addNewItem} />
      <ul className="list-group list-group-flush">
        {filteredList.length === 0 ? (
          <div className="alert alert-secondary">No items in the list</div>
        ) : (
          filteredList.map((item) => <TodoItem key={item.id} item={item} />)
        )}
      </ul>
      <Footer {...{ count, filter, changeFilter }} />
    </div>
  );
}



export default TodoList;
