import React, { useEffect, useState, useRef } from "react";
import { StyledFetchApi } from "./FetchApi.styled";
import axios from "axios";
import Card from "../Elements/Card/Card";

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
        .then(function (response) {
          // console.log(response.data);
          //setData(response.data.Search);
          const getByIdArray = response.data.Search.map((value: any) => {
            return axios.get(
              `https://www.omdbapi.com/?i=${value.imdbID}&apikey=${APIKEY}`
            );
          });
          let temp: any[] = [];
          //console.log(tempData);
          Promise.all(getByIdArray)
            .then((response: any) => {
              // console.log(response[0].data);
              for (let i = 0; i < response.length; i++) {
                //console.log("data", response[i].data);
                if (response[i].data) temp[i] = response[i].data;
              }
              console.log(temp);
              setData(temp);
              setError("");
              setLoading(false);
            })
            .catch((error) => {
              setError(error);
            });

          setError("");
          setLoading(false);
        })
        .catch(function (error) {
          // console.error(error);
          setError(error.message);
        });
    };

    if (prevSearch.current !== searchParams && searchParams !== "") {
      const timeOutId = setTimeout(() => {
        console.log(searchParams);
        // Send Axios request here
        getData();
      }, 500);
      prevSearch.current = searchParams;
      return () => clearTimeout(timeOutId);
    }
  }, [searchParams]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(event.target.value);
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
      <input autoFocus placeholder="Search..." onChange={handleSearchChange} />
      {dataTable}
    </StyledFetchApi>
  );
};

export default FetchApi;
