import { useEffect, useState } from "react";
import { paramsLookup } from "../api";

export default function SortBy({
  display,
  setDisplay,
  searchParams,
  setSearchParams,
  setIsLoading,
}) {
  function getDefaultSortingParam() {
    return searchParams.get("sort_by") !== "undefined"
      ? searchParams.get("sort_by") || "date"
      : "date";
  }

  const [sortingParam, setSortingParam] = useState(getDefaultSortingParam());

  useEffect(() => {
    setSortingParam(getDefaultSortingParam());
  }, [searchParams]);

  useEffect(() => {
    searchParams.set("sort_by", sortingParam);
    setSearchParams(searchParams);
  }, [sortingParam]);

  function selectSort(e, selectedSortingParam) {
    setIsLoading(true);
    e.preventDefault();
    setDisplay(null);
    setSortingParam(selectedSortingParam);
  }

  function SortByList() {
    if (display === "sort") {
      return (
        <ul className="misc-sub-element">
          {Object.keys(paramsLookup).map((sortingParam) => {
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
