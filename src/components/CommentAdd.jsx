import { useContext, useState } from "react";
import { postComment } from "../api";
import CommentCard from "./CommentCard";
import { UserContext } from "../contexts/User";

export default function CommentAdd({ article_id }) {
  const [newComments, setNewComments] = useState([]);
  const [isPosting, setIsPosting] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const { user } = useContext(UserContext);

  function handleNewComment(e, commentInput, article_id) {
    e.preventDefault();
    setIsPosting(true);
    postComment({ article_id, username: user.username, body: commentInput })
      .then((newComment) => {
        if (!newComment) {
          throw { status: 400 };
        }
        setIsPosting(false);
        setCommentError(false);
        setNewComments([newComment, ...newComments]);
        setCommentInput("");
      })
      .catch(() => {
        setIsPosting(false);
        setCommentError(true);
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
          <span>Working...</span>
        ) : (
          <button className="highlight-1">Comment</button>
        )}
      </form>
      {commentError ? (
        <section className="warning">
          Something went wrong, please try again
        </section>
      ) : (
        <></>
      )}
      {newComments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </>
  );
}
