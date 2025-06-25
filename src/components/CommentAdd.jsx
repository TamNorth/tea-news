import { useState } from "react";
import { postComment } from "../api";
import CommentCard from "./CommentCard";

export default function CommentAdd({ article_id }) {
  const [newComments, setNewComments] = useState([]);
  const [isPosting, setIsPosting] = useState(false);

  function handleNewComment(e, article_id) {
    e.preventDefault();
    setIsPosting(true);
    const body = e.target[0].value;
    postComment({ article_id, username: "jessjelly", body }).then(
      (newComment) => {
        setIsPosting(false);
        setNewComments([newComment, ...newComments]);
      }
    );
  }

  return (
    <>
      <form id="new-comment" onSubmit={(e) => handleNewComment(e, article_id)}>
        <input type="text"></input>
        {isPosting ? (
          <span>Working...</span>
        ) : (
          <button className="element-highlight-1">Submit</button>
        )}
      </form>
      {newComments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </>
  );
}
