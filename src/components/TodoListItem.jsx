import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
  MdModeEditOutline,
} from "react-icons/md";
import cn from "classnames";
import "../styles/TodoListItem.scss";

const TodoListItem = ({
  todo,
  onRemove,
  onInsertToggle,
  onToggle,
  setSelectedTodo,
}) => {
  const { id, text, checked } = todo;

  return (
    <li className="TodoListItem" draggable="true">
      <div
        className={cn("checkbox", { checked: checked })}
        onClick={() => {
          onToggle(id);
        }}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div
        className="edit"
        onClick={() => {
          onInsertToggle();
          setSelectedTodo((prev) => todo);
        }}
      >
        <MdModeEditOutline />
      </div>
      <div
        className="remove"
        onClick={() => {
          onRemove(id);
        }}
      >
        <MdRemoveCircleOutline />
      </div>
    </li>
  );
};

export default TodoListItem;
