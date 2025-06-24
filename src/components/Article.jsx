import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { getArticle } from "../api";

export default function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticle(article_id).then((response) => {
      setArticle(response);
    });
  }, []);

  return (
    <main>
      <ArticleCard article={article} />
    </main>
  );
}
