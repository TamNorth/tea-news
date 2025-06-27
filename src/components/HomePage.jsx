import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Loading from "./Loading";
import SortAndFilter from "./SortAndFilter";
import ErrorCard from "./ErrorCard";

export default function HomePage() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, searchParams).then((response) => {
      if (!response) {
        setError(404);
      }
      setArticles(response);
      setIsLoading(false);
    });
  }, [topic, searchParams.get("sort_by"), searchParams.get("order")]);

  if (error) {
    return (
      <main>
        <ErrorCard status={error} />
      </main>
    );
  }

  return (
    <main>
      <SortAndFilter
        topic={topic}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
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
