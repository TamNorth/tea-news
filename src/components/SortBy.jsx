import { useEffect, useState } from "react";

export default function SortBy({
  display,
  setDisplay,
  searchParams,
  setSearchParams,
  setIsLoading,
}) {
  const [sortingParam, setSortingParam] = useState("date");
  const sortingParams = {
    date: "created_at",
    comments: "comment_count",
    votes: "votes",
  };

  useEffect(() => {
    const sortingQuery = sortingParams[sortingParam];
    searchParams.set("sort_by", sortingQuery);
    setSearchParams(searchParams);
  }, [sortingParam]);

  function selectSort(e, sortingParam) {
    setIsLoading(true);
    e.preventDefault();
    setDisplay(null);
    setSortingParam(sortingParam);
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
