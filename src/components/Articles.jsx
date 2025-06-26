import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Topics from "./Topics";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [displayTopics, setDisplayTopics] = useState(false);

  useEffect(() => {
    getArticles().then((response) => {
      setArticles(response);
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      <section id="sort-and-filter" className="element-wrapper">
        <button className="element">Sort by</button>
        <button className="element">Order</button>
        <form id="topics-filter">
          <button
            type="button"
            className="element-highlight-1"
            onClick={() => setDisplayTopics(!displayTopics)}
          >
            {selectedTopic || "Filter by topic"}
          </button>
          {displayTopics ? <Topics /> : <></>}
        </form>
      </section>
      {isLoading ? (
        <div className="element-wrapper">
          <Loading />
        </div>
      ) : (
        articles.map((article) => {
          return (
            <button
              className="element-wrapper"
              key={article.article_id}
              onClick={() => {
                navigate(`/articles/${article.article_id}`);
              }}
            >
              <ArticleCard article={article} canVote={false} />
            </button>
          );
        })
      )}
    </main>
  );
}
