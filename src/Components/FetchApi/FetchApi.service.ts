import axios, { AxiosResponse } from "axios";

const APIKEY = process.env.REACT_APP_OMDB_APIKEY;

export async function SearchOMDB(searchTerm: string, page: number) {
  const urlBySearch = `https://www.omdbapi.com/?s=${searchTerm}&page=${page}&apikey=${APIKEY}`;
  const getBySearch = axios.get(urlBySearch);
  let results = 0;
  let resArray: Array<AxiosResponse> = [];

  await getBySearch.then(function (response: AxiosResponse) {
    results = response.data.totalResults;
    resArray = response.data.Search;
  });

  return {
    results: results,
    data: resArray,
  };
}

export async function SearchByIdOMDB(searchTerm: string, page: number) {
  let resArray: Array<AxiosResponse> = [];
  const searchResults = await SearchOMDB(searchTerm, page);

  const getIdArray = searchResults.data.map((value: any) => {
    return axios.get(
      `https://www.omdbapi.com/?i=${value.imdbID}&apikey=${APIKEY}`
    );
  });

  await Promise.all(getIdArray).then((response: AxiosResponse[]) => {
    resArray = response.map((res: AxiosResponse) => res.data);
  });

  return {
    results: searchResults.results,
    data: resArray,
  };
}
