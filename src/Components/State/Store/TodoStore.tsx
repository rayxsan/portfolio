import { action, computed, makeObservable, observable } from "mobx";
import React, { createContext, FC } from "react";

export interface TODO {
  id: string | number;
  task: string;
  completed: boolean;
}

class Store {
  todos: Array<TODO> = [];
  nextTodosId = 0;

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      removeTodo: action,
      toggleStatus: action,
      countTodo: computed,
      countCompleted: computed,
    });
  }

  private getTodosId() {
    return this.nextTodosId++;
  }

  addTodo(task: string) {
    this.todos.push({ id: this.getTodosId(), task, completed: false });
  }

  removeTodo(id: string | number) {
    const todos = this.todos.filter((todos) => todos.id !== id);
    this.todos = todos;
  }
  toggleStatus(todo: TODO) {
    todo.completed = !todo.completed;
  }

  get countTodo() {
    return this.todos.length;
  }

  get countCompleted() {
    return this.todos.filter((todos) => todos.completed === true).length;
  }
}

const todoStore = new Store();

const TodoStoreContext = createContext<Store>(todoStore);

const TodoStoreProvider: FC<{ store: Store }> = ({ store, children }) => {
  return (
    <TodoStoreContext.Provider value={store}>
      {children}
    </TodoStoreContext.Provider>
  );
};

export { todoStore, TodoStoreProvider };
