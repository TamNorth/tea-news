import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SortBy({ display, setDisplay, setSearchParams }) {
  const [sortingParam, setSortingParam] = useState(null);
  const sortingParams = {
    date: "created_at",
    comments: "comment_count",
    votes: "votes",
  };

  function selectSort(e, sortingParam) {
    e.preventDefault();
    setDisplay(null);
    setSortingParam(sortingParam);
    const query = sortingParams[sortingParam];
    setSearchParams(`?sort_by=${query}`);
  }

  function SortByList() {
    if (display === "sort") {
      return (
        <ul className="misc-sub-element">
          {Object.keys(sortingParams).map((sortingParam) => {
            return (
              <li key={sortingParam}>
                <button onClick={(e) => selectSort(e, sortingParam)}>
                  {sortingParam}
                </button>
              </li>
            );
          })}
        </ul>
      );
    }
  }

  return (
    <form
      id="sort-by"
      className={sortingParam ? "element-highlight-3" : "element-highlight-1"}
    >
      <button
        type="button"
        onClick={() => setDisplay(display === "sort" ? null : "sort")}
      >
        Sort by:{sortingParam ? ` ${sortingParam}` : ""}
      </button>
      <SortByList />
    </form>
  );
}
