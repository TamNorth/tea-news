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
      {isLoading ? <Loading /> : <ArticleCard article={article} />}
      <Comments articleId={article_id} />
    </main>
  );
}
