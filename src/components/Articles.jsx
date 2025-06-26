import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import Topics from "./Topics";

export default function Articles() {
  const { slug } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [display, setDisplay] = useState(null);

  useEffect(() => {
    getArticles(slug).then((response) => {
      setArticles(response);
      setIsLoading(false);
    });
  }, [slug]);

  return (
    <main>
      <section id="sort-and-filter" className="element-wrapper">
        <button className="element">Sort by</button>
        <button className="element">Order</button>
        <form id="topics-filter" className="element-highlight-1">
          <button
            type="button"
            onClick={() => setDisplay(display === "topics" ? null : "topics")}
          >
            Filter by{slug ? `: ${slug}` : " topic"}
          </button>
          {display === "topics" ? <Topics setDisplay={setDisplay} /> : <></>}
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
