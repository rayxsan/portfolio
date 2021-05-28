import { action, computed, makeObservable, observable } from "mobx";
import { RootStore } from "../../../RootStore/RootStore";

export interface TODO {
  id: string | number;
  task: string;
  completed: boolean;
  note: string;
}

class TodoStore {
  todos: Array<TODO> = [];
  nextTodosId = 1;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      removeTodo: action,
      toggleStatus: action,
      markAllCompleted: action,
      delAllCompleted: action,
      countTodo: computed,
      countCompleted: computed,
    });
  }

  private getTodosId() {
    if (this.todos.length === 0) this.nextTodosId = 1;
    return this.nextTodosId;
  }

  addTodo(task: string, note: string) {
    this.todos.push({
      id: this.getTodosId(),
      task,
      completed: false,
      note,
    });
    this.nextTodosId++;
  }

  removeTodo(id: string | number) {
    const todos = this.todos.filter((todos) => todos.id !== id);
    this.todos = todos;
  }
  toggleStatus(todo: TODO) {
    todo.completed = !todo.completed;
  }

  markAllCompleted() {
    this.todos.forEach((todo) => {
      todo.completed = true;
    });
  }

  delAllCompleted() {
    const todos = this.todos.filter((todos) => todos.completed !== true);
    this.todos = todos;
  }

  get countTodo() {
    return this.todos.length;
  }

  get countCompleted() {
    return this.todos.filter((todos) => todos.completed === true).length;
  }
}

export { TodoStore };
