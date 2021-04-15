import React from "react";
import { StyledTodo } from "./Todo.styled";
import { TODO, todoStore } from "./Store/TodoStore";
import { observer } from "mobx-react";
import { Formik, Form, Field } from "formik";
import Button from "../Elements/Button/Button";
import * as Yup from "yup";

const TodoSchema = Yup.object().shape({
  task: Yup.string().min(2, "To short").required("A text is required"),
});

const Todo: React.FC = observer(() => {
  const handleAddTodo = (task: string) => {
    // e.preventDefault();
    // //TODO: learn how to use React ref;
    // const task = document.getElementById("input-todo-text");

    // if (task) {
    //   todoStore.addTodo((task as HTMLInputElement).value);
    // }
    todoStore.addTodo(task);
  };

  const handleRemoveTodo = (id: string | number) => {
    todoStore.removeTodo(id);
  };

  const handleToggleTodo = (todo: TODO) => {
    todoStore.toggleStatus(todo);
  };

  const taskInput = (
    <Formik
      initialValues={{ task: "" }}
      onSubmit={(value, actions) => {
        handleAddTodo(value.task);
        actions.resetForm();
      }}
      validationSchema={TodoSchema}
    >
      {({ isValid, errors, touched, isSubmitting, dirty }) => (
        <Form>
          <Field type="task" name="task" />
          <Button
            primary
            disabled={isSubmitting || !dirty || !isValid}
            size="small"
            type="submit"
          >
            Add task
          </Button>
        </Form>
      )}
    </Formik>
  );

  const taskRows = todoStore.todos.map((todo: TODO) => {
    return (
      <tr key={todo.id}>
        <td>{todo.id}</td>
        <td>{todo.task}</td>
        <td>
          <input type="checkbox" onChange={() => handleToggleTodo(todo)} />
          {todo.completed ? <span>Done</span> : <span>Pending</span>}
        </td>
        <td>
          <Button
            secondary
            size="tiny"
            clicked={() => handleRemoveTodo(todo.id)}
          >
            Del
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <StyledTodo>
      {taskInput}
      <div>
        <label>Tasks: {todoStore.countTodo}</label>
      </div>
      <div>
        <label>Completed: {todoStore.countCompleted}</label>
      </div>
      {todoStore.countTodo > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{taskRows}</tbody>
        </table>
      )}
    </StyledTodo>
  );
});

export default Todo;
