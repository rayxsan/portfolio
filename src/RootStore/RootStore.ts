import { TodoStore } from "../Components/State/Store/TodoStore";
import { FetchStore } from "../Components/FetchApi/Store/FetchStore";

class RootStore {
  todoStore: TodoStore;
  fetchStore: FetchStore;
  constructor() {
    this.todoStore = new TodoStore(this);
    this.fetchStore = new FetchStore(this);
  }
}
const rootStore = new RootStore();

export { rootStore };
