import { useEffect, useState } from "react";
import { getTopics } from "../api";
import { useNavigate } from "react-router-dom";

export default function Topics() {
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTopics().then((res) => {
      setTopics(res);
    });
  });

  function selectTopic(e, slug) {
    e.preventDefault();
    navigate(`/topics/${slug}`);
  }

  return (
    <ul className="misc-sub-element">
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
