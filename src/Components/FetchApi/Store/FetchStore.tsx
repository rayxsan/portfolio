import {
  action,
  computed,
  observable,
  makeObservable,
  runInAction,
} from "mobx";
import { SearchOMDB } from "../FetchApi.service";

class FetchStore {
  data: Array<any> = [];
  searchTerm: string = "";
  status: "completed" | "pending" | "failed" = "pending";
  totalCount: number = 0;
  rootStore: any;

  constructor(rootStore: any) {
    this.rootStore = rootStore;
    makeObservable(this, {
      searchTerm: observable,
      status: observable,
      data: observable,
      totalCount: observable,
      search: action.bound,
      setTerm: action,
      getPages: computed,
    });
  }

  setTerm(term: string) {
    this.searchTerm = term;
  }
  async search() {
    try {
      this.status = "pending";
      const results = await SearchOMDB(this.searchTerm, 1);

      runInAction(() => {
        this.totalCount = results.totalPages;
        this.data = results.data;
        this.status = "completed";
      });
    } catch (error) {
      runInAction(() => (this.status = "failed"));
      console.log(error);
    }
  }

  get getPages() {
    return this.totalCount;
  }
}

export { FetchStore };
