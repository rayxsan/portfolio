import React from "react";
import { StyledTodo } from "./Todo.styled";
import { TODO, todoStore } from "./Store/TodoStore";
import { observer } from "mobx-react";
import { Formik, Form, Field } from "formik";
import Button from "../Elements/Button/Button";
import * as Yup from "yup";

const TodoSchema = Yup.object().shape({
  task: Yup.string()
    .min(3, "Task need to be more than 3 characters")
    .required("You need to enter a task"),
  note: Yup.string().optional(),
});

const Todo: React.FC = observer(() => {
  const handleAddTodo = (task: string, note: string) => {
    todoStore.addTodo(task, note);
  };

  const handleRemoveTodo = (id: string | number) => {
    todoStore.removeTodo(id);
  };

  const handleToggleTodo = (todo: TODO) => {
    todoStore.toggleStatus(todo);
  };

  const handleSelectAllTodos = () => {
    todoStore.markAllCompleted();
  };

  const handleDelCompletedTodos = () => {
    todoStore.delAllCompleted();
  };

  const taskInput = (
    <Formik
      initialValues={{ task: "", note: "" }}
      onSubmit={(values, actions) => {
        handleAddTodo(values.task, values.note);
        actions.resetForm();
      }}
      validationSchema={TodoSchema}
    >
      {({ isValid, errors, isSubmitting, dirty }) => (
        <Form>
          {errors.task !== "" && <label>{errors.task}</label>}
          <Field type="task" name="task" placeholder="New task" />
          <Field
            as="textarea"
            name="note"
            placeholder="Note (Optional)"
            disabled={false}
          />
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
        <td>{todo.task}</td>
        <td>
          <input
            type="checkbox"
            onChange={() => handleToggleTodo(todo)}
            checked={todo.completed}
          />
          {todo.completed ? <span>Completed</span> : <span>Pending</span>}
        </td>
        <td>{todo.id}</td>
        <td>
          <Button
            secondary
            size="tiny"
            clicked={() => handleRemoveTodo(todo.id)}
          >
            Del
          </Button>
        </td>
        <td>{todo.note}</td>
      </tr>
    );
  });

  const taskTable = (
    <div>
      <Button text primary clicked={handleSelectAllTodos}>
        Select all
      </Button>
      <Button text secondary clicked={handleDelCompletedTodos}>
        Del selected
      </Button>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>ID</th>
            <th>Delete</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>{taskRows}</tbody>
      </table>
      <div>
        <label>Tasks: {todoStore.countTodo}</label>
        <label>Completed: {todoStore.countCompleted}</label>
      </div>
    </div>
  );

  return (
    <StyledTodo>
      {taskInput}
      {todoStore.countTodo > 0 && taskTable}
    </StyledTodo>
  );
});

export default Todo;
