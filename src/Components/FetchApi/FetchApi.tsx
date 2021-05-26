import React, { useEffect, useState, useRef } from "react";
import { StyledFetchApi } from "./FetchApi.styled";
import axios, { AxiosResponse } from "axios";
import Card from "../Elements/Card/Card";
import * as svg from "../../shared/AppIcons";
import Button from "../Elements/Button/Button";

interface Props {}

interface SearchParams {
  search: string;
  page: number;
}

const FetchApi: React.FC<Props> = (props: Props) => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    search: "",
    page: 1,
  });
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  const prevSearch = useRef(searchParams);
  const APIKEY = "edb33d6a";

  //axios requests
  useEffect(() => {
    const getData = async (str: string, page: number) => {
      const urlBySearch = `https://www.omdbapi.com/?s=${str}&page=${page}&apikey=${APIKEY}`;
      const getBySearch = axios.get(urlBySearch);

      await getBySearch
        .then(function (response: AxiosResponse) {
          setTotalPages(response.data.totalResults);
          const getByIdArray = response.data.Search.map((value: any) => {
            return axios.get(
              `https://www.omdbapi.com/?i=${value.imdbID}&apikey=${APIKEY}`
            );
          });
          //let temp: AxiosResponse[] = [];
          Promise.all(getByIdArray)
            .then((response: any) => {
              const resArray = response.map((res: AxiosResponse) => res.data);
              // if (data.length > 0) {
              //   temp = data.concat(resArray);
              // } else {
              //   temp = resArray;
              // }
              setData(resArray);
              setError("");
              setLoading(false);
            })
            .catch((error) => {
              setError(error);
            });
        })
        .catch(function (error) {
          setError(error.message);
        });
    };
    if (prevSearch.current !== searchParams && searchParams.search !== "") {
      const timeOutId = setTimeout(() => {
        // Send Axios request here
        getData(searchParams.search, searchParams.page);
      }, 500);
      prevSearch.current = searchParams;
      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [searchParams]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ ...searchParams, search: event.target.value, page: 1 });
    setLoading(true);
  };

  const prevPageHandler = () => {
    let temp = 1;
    if (searchParams.page > 1 && searchParams.page < totalPages) {
      temp = searchParams.page - 1;
    } else {
      temp = 1;
    }
    setSearchParams({ ...searchParams, page: temp });
    setLoading(true);
  };

  const nextPageHandler = () => {
    let temp = 1;
    if (searchParams.page <= totalPages && totalPages > 1) {
      temp = searchParams.page + 1;
    } else {
      temp = 1;
    }
    setSearchParams({ ...searchParams, page: temp });
    setLoading(true);
  };

  const failSearch = () => {
    if (error !== "" || (!data && searchParams.search !== ""))
      return <p>No results found.</p>;
    if (searchParams.search !== "" && loading) return <p>Loading...</p>;
  };

  const dataTable = (
    <Card group>
      {error === "" && !loading && data && data.length > 0
        ? data.map((value) => {
            const imgContent = (
              <div>
                {value.Poster && (
                  <img src={value.Poster} alt="" title={value.Title} />
                )}
                <span>{value.Title}</span>
              </div>
            );
            return (
              <div key={value.imdbID}>
                <Card
                  animate
                  content={{
                    innerContent: imgContent,
                    description: `${value.Plot}`,
                  }}
                  footer={value.Year && <span>Year: {value.Year}</span>}
                />
              </div>
            );
          })
        : failSearch()}
    </Card>
  );

  return (
    <StyledFetchApi>
      <div>
        <svg.BiSearch />
        <input placeholder="Search..." onChange={handleSearchChange} />
        <div>
          <Button
            text
            primary
            clicked={prevPageHandler}
            disabled={searchParams.page === 1 || searchParams.search === ""}
          >
            Previous
          </Button>
          <Button
            primary
            text
            clicked={nextPageHandler}
            disabled={
              searchParams.page === totalPages || searchParams.search === ""
            }
          >
            Next
          </Button>
        </div>
      </div>
      {dataTable}
    </StyledFetchApi>
  );
};

export default FetchApi;
