import React from "react";
import Header from './Header'
import TodoItem from "./TodoItem";

function TodoList(props) {
  const { title, items } = props;

  return (
    <div className="todolist">
     {/* <h1>{title.toUpperCase()}</h1> */}
<Header title = {title}/>
      <ul className="list-group list-group-flush">
        {items.map((item) => (
          <TodoItem item = {item}/>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
