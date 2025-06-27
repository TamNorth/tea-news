import { useEffect, useState } from "react";

export default function Order({
  setDisplay,
  searchParams,
  setSearchParams,
  setIsLoading,
}) {
  const [isDescending, setIsDescending] = useState(
    searchParams.get("order") === "asc" ? false : true
  );

  useEffect(() => {
    setIsDescending(searchParams.get("order") === "asc" ? false : true);
  }, [searchParams]);

  useEffect(() => {
    const orderParam = isDescending ? "desc" : "asc";
    searchParams.set("order", orderParam);
    setSearchParams(searchParams);
  }, [isDescending]);

  function toggleOrdering() {
    setIsLoading(true);
    setIsDescending(!isDescending);
    setDisplay(null);
  }

  return (
    <form id="order-by" className={"element-highlight-1"}>
      <button type="button" onClick={toggleOrdering}>
        {isDescending ? "Descending" : "Ascending"}
      </button>
    </form>
  );
}
