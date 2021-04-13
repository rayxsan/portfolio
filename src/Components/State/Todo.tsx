import React from "react";
import { StyledTodo } from "./Todo.styled";
import { TODO, todoStore } from "./Store/TodoStore";
import { observer } from "mobx-react";

const Todo: React.FC = observer(() => {
  const handleAddTodo = (e: any) => {
    e.preventDefault();
    //TODO: learn how to use React ref;
    const task = document.getElementById("input-todo-text");

    if (task) {
      todoStore.addTodo((task as HTMLInputElement).value);
    }
  };

  const handleRemoveTodo = (id: string | number) => {
    todoStore.removeTodo(id);
  };

  const handleToggleTodo = (todo: TODO) => {
    todoStore.toggleStatus(todo);
  };
  return (
    <StyledTodo>
      {" "}
      <form onSubmit={handleAddTodo}>
        <input type="text" name="text" id="input-todo-text" />
        <button type="submit">Add task</button>
      </form>
      <div>
        <label>Tasks: {todoStore.countTodo}</label>
      </div>
      <div>
        <label>Completed: {todoStore.countCompleted}</label>
      </div>
      <ul>
        {todoStore.todos.map((todo: TODO) => {
          return (
            <li key={todo.id}>
              <div className="todo-list">
                <input
                  type="checkbox"
                  onChange={() => handleToggleTodo(todo)}
                />{" "}
                <span>{todo.task}</span>{" "}
                <button onClick={() => handleRemoveTodo(todo.id)}>
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </StyledTodo>
  );
});

export default Todo;
