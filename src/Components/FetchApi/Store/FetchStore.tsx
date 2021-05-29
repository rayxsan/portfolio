import {
  action,
  computed,
  observable,
  makeObservable,
  runInAction,
  reaction,
} from "mobx";
import { SearchByIdOMDB } from "../FetchApi.service";
import { RootStore } from "../../../RootStore/RootStore";

class FetchStore {
  data: Array<any> = [];
  searchTerm: string = "";
  status: "completed" | "pending" | "failed" = "pending";
  currentPage: number = 1;
  totalPages: number = 0;
  rootStore: RootStore;

  constructor(rootStore: any) {
    this.rootStore = rootStore;
    makeObservable(this, {
      searchTerm: observable,
      status: observable,
      data: observable,
      totalPages: observable,
      search: action.bound,
      setTerm: action,
      nextPage: action,
      prevPage: action,
      getPages: computed,
      isEmpty: computed,
    });
  }

  setTerm(term: string) {
    this.searchTerm = term;
    this.currentPage = 1;
  }

  async search() {
    try {
      this.status = "pending";
      const results = await SearchByIdOMDB(this.searchTerm, this.currentPage);

      runInAction(() => {
        // let tempArray = this.data.concat(results.data)
        this.totalPages = Math.ceil(results.results / 10);
        this.data = results.data;
        console.log(this.data);
        this.status = "completed";
      });
    } catch (error) {
      runInAction(() => (this.status = "failed"));
      console.log(error);
    }
  }

  nextPage() {
    if (this.currentPage <= this.totalPages) {
      this.currentPage++;
      this.search();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.search();
    }
  }

  get isEmpty() {
    return this.data.length === 0;
  }

  get getPages() {
    return this.totalPages;
  }
}

export { FetchStore };
