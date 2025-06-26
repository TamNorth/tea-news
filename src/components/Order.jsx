import { useEffect, useState } from "react";

export default function Order({ setDisplay, searchParams, setSearchParams }) {
  const [isDescending, setIsDescending] = useState(true);

  useEffect(() => {
    const orderParam = isDescending ? "desc" : "asc";
    setSearchParams(`?order=${orderParam}`);
  }, [isDescending]);

  function toggleOrdering() {
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
