import React, { useEffect, useState, useRef } from "react";
import { StyledFetchApi } from "./FetchApi.styled";
import axios, { AxiosResponse } from "axios";
import Card from "../Elements/Card/Card";
import * as svg from "../../shared/AppIcons";

interface Props {}

// interface DataItem {
//   Poster: string;
//   Title: string;
//   Type: string;
//   Year: string;
//   imdbID: string;
//   Plot?: string;
// }

const FetchApi: React.FC<Props> = (props: Props) => {
  const [searchParams, setSearchParams] = useState("");
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const prevSearch = useRef(searchParams);
  const APIKEY = "edb33d6a";

  //axios requests
  useEffect(() => {
    const getData = async () => {
      const urlBySearch = `https://www.omdbapi.com/?s=${searchParams}&apikey=${APIKEY}`;
      const getBySearch = axios.get(urlBySearch);

      await getBySearch
        .then(function (response: AxiosResponse) {
          const getByIdArray = response.data.Search.map((value: any) => {
            return axios.get(
              `https://www.omdbapi.com/?i=${value.imdbID}&apikey=${APIKEY}`
            );
          });
          let temp: AxiosResponse[] = [];
          Promise.all(getByIdArray)
            .then((response: any) => {
              temp = response.map((res: AxiosResponse) => res.data);
              setData(temp);
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

    if (prevSearch.current !== searchParams && searchParams !== "") {
      const timeOutId = setTimeout(() => {
        // Send Axios request here
        getData();
      }, 500);
      prevSearch.current = searchParams;
      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [searchParams]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(event.target.value);
    setLoading(true);
  };

  const failSearch = () => {
    if (error !== "" || (!data && searchParams !== ""))
      return <p>No results found.</p>;
    if (searchParams !== "" && loading) return <p>Loading...</p>;
  };

  const dataTable = (
    <Card group>
      {error === "" && data && data.length > 0
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
      </div>
      {dataTable}
    </StyledFetchApi>
  );
};

export default FetchApi;
