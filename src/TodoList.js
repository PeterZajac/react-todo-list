import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list">
      {todos.length === 0 && "Nothin Todo :("}
      {todos.map((todo) => {
        return (
          <TodoItem
            //{...todo} toto mozeme urobiť namiesto všetkeho, kedze vzdy vraciame niečo z tofo, v podstate vratime ho cely
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};
