import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import Topics from "./Topics";

export default function Articles() {
  const { slug, sort } = useParams();
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
        <form
          id="sort-by"
          className={sort ? "element-highlight-3" : "element-highlight-1"}
        >
          <button
            type="button"
            onClick={() => setDisplay(display === "sort" ? null : "sort")}
          >
            Sort by:{sort ? ` ${sort}` : ""}
          </button>
          {display === "sort" ? <SortBy setDisplay={setDisplay} /> : <></>}
        </form>
        <button className="element">Order</button>
        <form
          id="topics-filter"
          className={slug ? "element-highlight-3" : "element-highlight-1"}
        >
          <button
            type="button"
            onClick={() => setDisplay(display === "topics" ? null : "topics")}
          >
            Filter by{slug ? `: ${slug}` : " topic"}
          </button>
          <Topics display={display} setDisplay={setDisplay} />
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
