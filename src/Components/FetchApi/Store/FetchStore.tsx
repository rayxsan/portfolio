import { action, computed, observable, makeObservable, flow } from "mobx";
import { SearchByIdOMDB } from "../FetchApi.service";
import { RootStore } from "../../../RootStore/RootStore";

import { RESULTS_PER_PAGE } from "../FetchApi";

class FetchStore {
  data: Array<any> = [];
  searchTerm: string = "";
  status: "completed" | "pending" | "failed" = "pending";
  currentPage: number = 1;
  totalPages: number = 0;
  rootStore: RootStore;
  prevSearchTerm = "";

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
    this.prevSearchTerm = this.searchTerm;
    this.searchTerm = term;
    this.currentPage = 1;
  }

  // async search() {
  //   try {
  //     this.status = "pending";
  //     const results = await SearchByIdOMDB(this.searchTerm, this.currentPage);
  //     runInAction(() => {
  //       this.totalPages = Math.ceil(results.results / 10);
  //       this.data = results.data;
  //       console.log(this.data);
  //       this.status = "completed";
  //     });
  //   } catch (error) {
  //     runInAction(() => (this.status = "failed"));
  //     console.log(error);
  //   }
  // }

  search = flow(function* (this: FetchStore) {
    console.log(this.prevSearchTerm);
    // if (this.searchTerm !== this.prevSearchTerm) this.data = [];
    this.status = "pending";
    try {
      //console.log(this.searchTerm);
      const results = yield SearchByIdOMDB(this.searchTerm, this.currentPage);
      if (results.data.length > 0) {
        this.totalPages = Math.ceil(results.results / RESULTS_PER_PAGE);
        if (this.data.length === 0) {
          this.data = results.data;
        } else {
          this.data = this.data.concat(results.data);
        }
        this.status = "completed";
      }
    } catch (error) {
      this.status = "failed";
      console.log(error);
    }
  });

  nextPage() {
    if (this.currentPage <= this.totalPages) {
      this.currentPage++;
      if (this.data.length < this.currentPage * RESULTS_PER_PAGE) {
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
    return this.data.length === 0;
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
