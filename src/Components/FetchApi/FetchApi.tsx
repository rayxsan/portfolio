import React, { useEffect, useState, useRef } from "react";
import { StyledFetchApi } from "./FetchApi.styled";
import axios from "axios";
import Card from "../Elements/Card/Card";

interface Props {}

interface DataItem {
  i: {
    height: number;
    imageUrl: string;
    width: 1363;
  };
  id: string;
  l: string;
  q: string;
  rank: number;
  s: string;
  y: number;
  yr: string;
}

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
      const urlSearch = `http://www.omdbapi.com/?s=${searchParams}&apikey=${APIKEY}`;
      const getSearch = axios.get(urlSearch);

      await getSearch
        .then(function (response) {
          console.log(response.data);
          setData(response.data.Search);
          setError("");
          setLoading(false);
        })
        .catch(function (error) {
          console.error(error);
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
    if (error !== "") return <p>{error}</p>;
    if (searchParams !== "" && loading) return <p>Loading...</p>;
    if (!data && searchParams !== "") return <p>No results founds</p>;
  };

  const dataTable = (
    <Card group>
      {error === "" && data && data.length > 0
        ? data.map((value, key) => {
            const imgContent = (
              <div>
                {value.Poster && (
                  <img src={value.Poster} alt="" title={value.Title} />
                )}
                <span>{value.Title}</span>
              </div>
            );
            return (
              <div key={key}>
                <Card
                  animate
                  content={{
                    innerContent: imgContent,
                    description: `${value.Type}`,
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
