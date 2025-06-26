import { useState } from "react";
import Topics from "./Topics";
import SortBy from "./SortBy";
import Order from "./Order";

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
      <Order
        setDisplay={setDisplay}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <Topics
        topic={topic}
        display={display}
        setDisplay={setDisplay}
        searchParams={searchParams}
      />
    </section>
  );
}
