import axios, { AxiosResponse } from "axios";

const APIKEY = process.env.REACT_APP_OMDB_APIKEY;

export async function SearchOMDB(searchTerm: string, page: number) {
  const urlBySearch = `https://www.omdbapi.com/?s=${searchTerm}&page=${page}&apikey=${APIKEY}`;
  const getBySearch = axios.get(urlBySearch);
  let pages = 0;
  let resArray: Array<any> = [];

  await getBySearch.then(function (response: AxiosResponse) {
    pages = Math.ceil(response.data.totalResults / 10);
    console.log(response.data);

    const getByIdArray = response.data.Search.map((value: any) => {
      return axios.get(
        `https://www.omdbapi.com/?i=${value.imdbID}&apikey=${APIKEY}`
      );
    });
    Promise.all(getByIdArray).then((response: any) => {
      resArray = response.map((res: AxiosResponse) => res.data);
    });
  });

  return {
    totalPages: pages,
    data: resArray,
  };
}
