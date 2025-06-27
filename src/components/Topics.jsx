import { useEffect, useState } from "react";
import { getTopics } from "../api";
import { useNavigate } from "react-router-dom";

export default function Topics({
  topic,
  display,
  setDisplay,
  searchParams,
  setIsLoading,
}) {
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTopics().then((res) => {
      setTopics(res);
    });
  }, []);

  function selectTopic(e, slug) {
    e.preventDefault();
    setIsLoading(true);
    setDisplay(null);
    const path = slug ? `/topics/${slug}?${searchParams}` : `/?${searchParams}`;
    navigate(path);
  }

  function TopicList() {
    if (display === "topics") {
      return (
        <ul className="sort-and-filter-list">
          <li>
            <button onClick={(e) => selectTopic(e, null)}>reset</button>
          </li>
          {topics.map((topic) => {
            const { slug } = topic;
            return (
              <li key={slug}>
                <button onClick={(e) => selectTopic(e, slug)}>{slug}</button>
              </li>
            );
          })}
        </ul>
      );
    }
  }

  return (
    <form
      id="topics-filter"
      className={topic ? "element-highlight-3" : "element-highlight-1"}
    >
      <button
        type="button"
        onClick={() => setDisplay(display === "topics" ? null : "topics")}
      >
        Filter by{topic ? `: ${topic}` : " topic"}
      </button>
      <TopicList />
    </form>
  );
}
