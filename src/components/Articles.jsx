import ArticleCard from "./ArticleCard";
import { getArticles } from "../fetchers";
import { useEffect, useState } from "react";

export default function Articles() {
  const [articles, setArticles] = useState([]);

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
        <button className="element-highlight-2">Topic: </button>
      </section>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </main>
  );
}
