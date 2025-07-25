import { useEffect, useState } from "react";
import Topics from "./Topics";
import SortBy from "./SortBy";
import Order from "./Order";

export default function SortAndFilter({
  topic,
  searchParams,
  setSearchParams,
  isLoading,
  setIsLoading,
}) {
  const [display, setDisplay] = useState(null);

  useEffect(() => {
    setDisplay(null);
  }, [isLoading]);

  return (
    <section id="sort-and-filter" className="element-wrapper">
      <SortBy
        display={display}
        setDisplay={setDisplay}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        setIsLoading={setIsLoading}
      />
      <Order
        setDisplay={setDisplay}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        setIsLoading={setIsLoading}
      />
      <Topics
        topic={topic}
        display={display}
        setDisplay={setDisplay}
        searchParams={searchParams}
        setIsLoading={setIsLoading}
      />
    </section>
  );
}
