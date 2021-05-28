import React, { useEffect } from "react";
import { useRootStore } from "../../RootStore/RootStore";
import { observer } from "mobx-react";
import { StyledFetchApi } from "./FetchApi.styled";
import Card from "../Elements/Card/Card";
import * as svg from "../../shared/AppIcons";
import Button from "../Elements/Button/Button";
import Progress from "../Elements/Progress/Progress";

const FetchApi: React.FC = observer(() => {
  const { fetchStore } = useRootStore();
  const handleSearchChange = (event: any) => {
    fetchStore.setTerm(event.target.value);
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      // Send Axios request here
      fetchStore.search();
    }, 500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  const dataTable = (
    <Card group>
      {fetchStore.status === "completed" ? (
        fetchStore.data.map((value) => {
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
      ) : (
        <div>No results</div>
      )}
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
});

export default FetchApi;
