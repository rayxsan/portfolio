import React from "react";
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

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      fetchStore.search();
    }
  };
  const prevPageHandler = () => {
    fetchStore.prevPage();
  };
  const nextPageHandler = () => {
    fetchStore.nextPage();
  };

  const dataTable = (
    <Card group>
      {fetchStore.status === "completed" && fetchStore.totalPages > 0 ? (
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
          value={fetchStore.searchTerm}
          onKeyDown={handleKeyDown}
        />
        {/* <Button clicked={handleClick}>Search</Button> */}
      </div>
      {paginationButtons}
      {dataTable}
    </StyledFetchApi>
  );
});

export default FetchApi;
