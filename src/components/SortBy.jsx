import { useLocation, useNavigate } from "react-router-dom";

export default function SortBy({
  setDisplay,
  sortingParams,
  setSearchParams,
  setSortingParam,
}) {
  function selectSort(e, sortingParam) {
    e.preventDefault();
    setDisplay(null);
    setSortingParam(sortingParam);
    const query = sortingParams[sortingParam];
    setSearchParams(`?sort_by=${query}`);
  }

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
