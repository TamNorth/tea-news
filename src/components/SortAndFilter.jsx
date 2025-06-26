import { useState } from "react";
import Topics from "./Topics";
import SortBy from "./SortBy";

export default function SortAndFilter({
  topic,
  searchParams,
  setSearchParams,
}) {
  const [display, setDisplay] = useState(null);

  return (
    <section id="sort-and-filter" className="element-wrapper">
      <SortBy
        display={display}
        setDisplay={setDisplay}
        setSearchParams={setSearchParams}
      />
      {/* <form className={order ? "element-highlight-3" : "element-highlight-1"}>
        Order
      </form> */}
      <Topics
        topic={topic}
        display={display}
        setDisplay={setDisplay}
        searchParams={searchParams}
      />
    </section>
  );
}
