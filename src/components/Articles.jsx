import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Loading from "./Loading";
import Topics from "./Topics";
import SortBy from "./SortBy";

export default function Articles() {
  const { slug, order } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [display, setDisplay] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortingParams = {
    date: "created_at",
    comments: "comment_count",
    votes: "votes",
  };
  const [sortingParam, setSortingParam] = useState(null);

  useEffect(() => {
    getArticles(slug, searchParams).then((response) => {
      setArticles(response);
      setIsLoading(false);
    });
  }, [slug, searchParams]);

  return (
    <main>
      <section id="sort-and-filter" className="element-wrapper">
        <form
          id="sort-by"
          className={
            searchParams ? "element-highlight-3" : "element-highlight-1"
          }
        >
          <button
            type="button"
            onClick={() => setDisplay(display === "sort" ? null : "sort")}
          >
            Sort by:{sortingParam ? ` ${sortingParam}` : ""}
          </button>
          {display === "sort" ? (
            <SortBy
              setDisplay={setDisplay}
              sortingParams={sortingParams}
              setSearchParams={setSearchParams}
              setSortingParam={setSortingParam}
            />
          ) : (
            <></>
          )}
        </form>
        <form className={order ? "element-highlight-3" : "element-highlight-1"}>
          Order
        </form>
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
          <Topics
            display={display}
            setDisplay={setDisplay}
            searchParams={searchParams}
          />
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
