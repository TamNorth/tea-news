import { useContext, useState } from "react";
import { postComment } from "../api";
import CommentCard from "./CommentCard";
import { UserContext } from "../contexts/User";
import ErrorMessage from "./ErrorMessage";

export default function CommentAdd({ article_id }) {
  const [newComments, setNewComments] = useState([]);
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState(null);
  const [commentInput, setCommentInput] = useState("");
  const { user } = useContext(UserContext);

  function handleNewComment(e, commentInput, article_id) {
    e.preventDefault();
    setIsPosting(true);
    if (!user) {
      setIsPosting(false);
      return setError("login");
    }
    postComment({ article_id, username: user.username, body: commentInput })
      .then((newComment) => {
        if (!newComment) {
          throw { status: 500 };
        }
        setIsPosting(false);
        setError(null);
        setNewComments([newComment, ...newComments]);
        setCommentInput("");
      })
      .catch(() => {
        setIsPosting(false);
        setError(true);
      });
  }

  return (
    <>
      <form
        id="new-comment"
        className="misc-sub-element"
        onSubmit={(e) => handleNewComment(e, commentInput, article_id)}
      >
        <input
          type="text"
          minLength={10}
          placeholder="Say something..."
          onInput={(e) => {
            setCommentInput(e.target.value);
          }}
          value={commentInput}
        ></input>
        {isPosting ? (
          <button type="button" className="highlight-3">
            Working...
          </button>
        ) : (
          <button className="highlight-1">Comment</button>
        )}
        {error ? <ErrorMessage err={error} /> : <></>}
      </form>
      {newComments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </>
  );
}
