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

  const handleSearchChange = (event: any) => {
    fetchStore.setTerm(event.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      fetchStore.search();
    }
  };

  const handleKeyUp = (event: any) => {
    if (event.keyCode !== 13) {
      return;
    }
    //fetchStore.search();
  };

  const prevPageHandler = () => {
    fetchStore.prevPage();
  };
  const nextPageHandler = () => {
    fetchStore.nextPage();
  };
  const failSearch = () => {
    if (fetchStore.status === "failed" || fetchStore.isEmpty)
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
        ? fetchStore.pages[fetchStore.currentPage - 1].map((value: any) => {
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
          fetchStore.pages.length === 0 ||
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
          value={fetchStore.searchTerm}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
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
