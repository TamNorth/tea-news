import { useEffect, useState } from "react";
import { getTopics } from "../api";
import { useNavigate } from "react-router-dom";

export default function Topics({ display, setDisplay }) {
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTopics().then((res) => {
      setTopics(res);
    });
  });

  function selectTopic(e, slug) {
    e.preventDefault();
    setDisplay(null);
    const path = slug ? `/topics/${slug}` : "/";
    navigate(path);
  }

  if (display === "topics") {
    return (
      <ul className="misc-sub-element">
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
