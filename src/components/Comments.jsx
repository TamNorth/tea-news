import { useEffect, useState } from "react";
import { getComments } from "../api";
import Loading from "./Loading";
import CommentCard from "./CommentCard";

export default function Comments(articleId) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(articleId).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <ul className="element">
        {comments.map((comment) => {
          return <CommentCard comment={comment} />;
        })}
      </ul>
    );
  }
}
