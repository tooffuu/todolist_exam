import "../styles/TodoTemplate.scss";

function TodoTemplate({ children }) {
  return (
    <div className="TodoTemplate">
      <div className="app-title">To-do List🔥</div>
      <div className="content" dragover="true">
        {children}
      </div>
    </div>
  );
}

export default TodoTemplate;
