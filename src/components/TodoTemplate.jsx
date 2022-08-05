import "../styles/TodoTemplate.scss";

function TodoTemplate({ children }) {
  return (
    <div className="TodoTemplate">
      <div className="app-title">To-do List🔥</div>
      <div className="content">{children}</div>
    </div>
  );
}

export default TodoTemplate;
