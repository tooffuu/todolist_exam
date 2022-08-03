import React from "react";
import TodoListItem from "./TodoListItem";
import "../styles/TodoList.scss";

const TodoList = ({
  todos,
  onRemove,
  onInsertToggle,
  onToggle,
  setSelectedTodo,
}) => {
  return (
    <ul className="TodoList">
      {todos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          key={index}
          setSelectedTodo={setSelectedTodo}
          onInsertToggle={onInsertToggle}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};

export default TodoList;
