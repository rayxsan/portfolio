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
  const [error, setError] = useState("");

  const prevSearch = useRef(searchParams);

  const getData = async () =>
    await axios
      .request({
        method: "GET",
        url: "https://imdb8.p.rapidapi.com/auto-complete",
        params: { q: searchParams },
        headers: {
          "x-rapidapi-key":
            "bf9c805b23msh91609a5a1732925p107546jsn0ff96b60aaeb",
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
        },
      })
      .then(function (response) {
        console.log(response.data.d);
        setData(response.data.d);
      })
      .catch(function (error) {
        console.error(error);
        setError("error");
      });

  useEffect(() => {
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

  const dataTable = (
    <Card group>
      {data.length > 0 ? (
        data.map((value, key) => {
          const imgContent = (
            <div>
              {value.i && <img src={value.i.imageUrl} alt="" title={value.l} />}
              <span>{value.l}</span>
            </div>
          );
          return (
            <div key={key}>
              <Card
                animate
                content={{
                  innerContent: imgContent,
                  description: `${value.s}`,
                }}
                footer={value.y && <span>Year: {value.y}</span>}
              />
            </div>
          );
        })
      ) : (
        <p>No results found</p>
      )}
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
