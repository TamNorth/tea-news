import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { getArticle } from "../api";
import Loading from "./Loading";
import Comments from "./Comments";

export default function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticle(article_id).then((response) => {
      setArticle(response);
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      <div id="article-page" className="element-wrapper">
        {isLoading ? (
          <Loading />
        ) : (
          <ArticleCard article={article} canVote={true} />
        )}
      </div>
      <div id="comments-section" className="element-wrapper">
        <Comments article_id={article_id} />
      </div>
    </main>
  );
}
