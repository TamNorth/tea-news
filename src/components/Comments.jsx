import { useEffect, useState } from "react";
import { getComments } from "../api";
import Loading from "./Loading";
import CommentCard from "./CommentCard";
import CommentAdd from "./CommentAdd";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(article_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <section id="comments" className="element">
        <h2>Comments</h2>
        <CommentAdd article_id={article_id} />
        <ul>
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      </section>
    );
  }
}
