import React from "react";
import Header from "./Header";
import TodoItem from "./TodoItem";
import Footer from "./Footer";

function TodoList(props) {
  const { title, items } = props;
  const count = items.length;
  return (
    <div className="todolist">
      <Header title={title} />
      <ul className="list-group list-group-flush">
        {items.map((item) => (
          <TodoItem item={item} />
        ))}
      </ul>
      <Footer count={count} />
    </div>
  );
}

export default TodoList;
