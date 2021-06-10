import {
  action,
  computed,
  observable,
  makeObservable,
  runInAction,
} from "mobx";
import { SearchByIdOMDB } from "../FetchApi.service";
import { RootStore } from "../../../RootStore/RootStore";

import { RESULTS_PER_PAGE } from "../FetchApi";

class FetchStore {
  searchTerm: string = "";
  status: "" | "completed" | "pending" | "failed" = "";
  currentPage: number = 1;
  totalPages: number = 0;
  pages: Array<any> = [];
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      searchTerm: observable,
      status: observable,
      currentPage: observable,
      pages: observable.shallow,
      totalPages: observable,
      search: action,
      setTerm: action,
      nextPage: action,
      prevPage: action,
      getPages: computed,
      isEmpty: computed,
    });
  }

  setTerm(term: string) {
    this.searchTerm = term;
    this.status = "";
  }

  async search() {
    if (this.status === "") {
      this.reset();
    }
    try {
      this.status = "pending";
      const results = await SearchByIdOMDB(this.searchTerm, this.currentPage);
      runInAction(() => {
        if (results.data.length > 0) {
          this.totalPages = Math.ceil(results.results / RESULTS_PER_PAGE);
          this.pages[this.currentPage - 1] = results.data;
          this.status = "completed";
        }
      });
    } catch (error) {
      runInAction(() => (this.status = "failed"));
      console.log(error);
    }
  }

  private reset() {
    this.pages = [];
    this.currentPage = 1;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      if (this.pages.length < this.totalPages - 1) {
        this.search();
      }
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get isEmpty() {
    return this.pages.length === 0;
  }

  get getPages() {
    return this.totalPages;
  }

  get resultsIndex() {
    if (this.currentPage > 1) {
      return this.currentPage * RESULTS_PER_PAGE;
    } else return 0;
  }
}

export { FetchStore };
