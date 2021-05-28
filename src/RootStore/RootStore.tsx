import { TodoStore } from "../Components/State/Store/TodoStore";
import { FetchStore } from "../Components/FetchApi/Store/FetchStore";
import React, { createContext, useContext } from "react";

class RootStore {
  todoStore: TodoStore;
  fetchStore: FetchStore;
  constructor() {
    this.todoStore = new TodoStore(this);
    this.fetchStore = new FetchStore(this);
  }
}

// holds a reference to the store (singleton)
let store: RootStore;

// create the context
const StoreContext = createContext<RootStore | undefined>(undefined);

// create the provider component
function RootStoreProvider({ children }: { children: React.ReactNode }) {
  //only create the store once ( store is a singleton)
  const root = store ?? new RootStore();

  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
}

// create the hook
function useRootStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useRootStore must be used within RootStoreProvider");
  }

  return context;
}

export { RootStore, RootStoreProvider, useRootStore };
