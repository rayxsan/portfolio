import React, { useState } from "react";
import { useRootStore } from "../../RootStore/RootStore";
import { observer } from "mobx-react";
import { StyledFetchApi } from "./FetchApi.styled";
import Card from "../Elements/Card/Card";
import * as svg from "../../shared/AppIcons";
import Button from "../Elements/Button/Button";
import Progress from "../Elements/Progress/Progress";

export const RESULTS_PER_PAGE = 10;

const FetchApi: React.FC = observer(() => {
  const { fetchStore } = useRootStore();
  const [start, setStart] = useState(0);
  const [localTerm, setLocalTerm] = useState("");

  const handleSearchChange = (event: any) => {
    setLocalTerm(event.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      fetchStore.setTerm(localTerm);
      fetchStore.search();
    }
  };

  // const handleKeyUp = (event: any) => {
  //   const timeOutId = setTimeout(() => {
  //     // fetchStore.setTerm(localTerm);
  //     console.log("search invoked");
  //     //fetchStore.search();
  //   }, 3000);

  //   return () => {
  //     clearTimeout(timeOutId);
  //   };
  // };

  const prevPageHandler = () => {
    fetchStore.prevPage();
    setStart((fetchStore.currentPage - 1) * RESULTS_PER_PAGE);
  };
  const nextPageHandler = () => {
    fetchStore.nextPage();
    setStart((fetchStore.currentPage - 1) * RESULTS_PER_PAGE);
  };
  const failSearch = () => {
    if (
      fetchStore.status === "failed" ||
      (fetchStore.isEmpty && fetchStore.searchTerm !== "")
    )
      return <p>No results found.</p>;
    if (fetchStore.status === "pending" && !fetchStore.isEmpty)
      return (
        <p>
          <Progress primary />
        </p>
      );
  };
  const dataTable = (
    <Card group>
      {fetchStore.status === "completed" && !fetchStore.isEmpty
        ? fetchStore.data
            .slice(start, start + RESULTS_PER_PAGE)
            .map((value) => {
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

  const paginationButtons = (
    <div>
      <Button
        text
        primary
        clicked={prevPageHandler}
        disabled={fetchStore.currentPage === 1 || fetchStore.searchTerm === ""}
      >
        Previous
      </Button>
      <Button
        primary
        text
        clicked={nextPageHandler}
        disabled={
          fetchStore.currentPage === fetchStore.totalPages ||
          fetchStore.data.length === 0 ||
          fetchStore.searchTerm === ""
        }
      >
        Next
      </Button>
      {fetchStore.searchTerm !== "" && fetchStore.status === "completed" && (
        <label>
          Page {fetchStore.currentPage} of {fetchStore.totalPages}
        </label>
      )}
    </div>
  );
  return (
    <StyledFetchApi>
      <div>
        <svg.BiSearch />
        <input
          placeholder="Search..."
          onChange={handleSearchChange}
          value={localTerm}
          onKeyDown={handleKeyDown}
        />
      </div>
      {fetchStore.searchTerm !== "" &&
        fetchStore.totalPages > 1 &&
        paginationButtons}
      {dataTable}
    </StyledFetchApi>
  );
});

export default FetchApi;
