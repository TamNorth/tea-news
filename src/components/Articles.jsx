import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getArticles().then((response) => {
      setArticles(response);
    });
  }, []);

  return (
    <main>
      <section id="sort-and-filter">
        <button className="element">Sort by</button>
        <button className="element">Order</button>
        <button className="element-highlight-1">Topic: </button>
      </section>
      {articles.map((article) => {
        return (
          <button
            className="element-wrapper"
            key={article.article_id}
            onClick={() => {
              navigate(`/articles/${article.article_id}`);
            }}
          >
            <ArticleCard article={article} />
          </button>
        );
      })}
    </main>
  );
}
