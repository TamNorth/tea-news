import { useContext, useState } from "react";
import { getTimestampValues } from "../utils";
import VotePanel from "./VotePanel";
import { UserContext } from "../contexts/User";
import ErrorMessage from "./ErrorMessage";
import { deleteComment } from "../api";

export default function CommentCard({ comment }) {
  const { comment_id, author, body, created_at, votes } = comment;
  const { year, month, day, hour, minute } = getTimestampValues(created_at);
  const { user } = useContext(UserContext);
  const [deletedStatus, setDeletedStatus] = useState(null);
  const [error, setError] = useState(false);

  function handleDeleteComment() {
    setDeletedStatus("working");
    deleteComment(comment_id)
      .then(() => {
        setDeletedStatus("deleted");
      })
      .catch(() => {
        setDeletedStatus(0);
        setError(true);
      });
  }

  function DeleteButton() {
    if (user?.username !== author) {
      return <></>;
    } else if (deletedStatus === "working") {
      return (
        <button id="comment-delete" className="element-highlight-3">
          Working...
        </button>
      );
    } else {
      return (
        <button
          id="comment-delete"
          className="element-highlight-2"
          onClick={(comment_id) => handleDeleteComment(comment_id)}
        >
          Delete comment
        </button>
      );
    }
  }

  if (deletedStatus === "deleted") {
    return (
      <li key={comment_id} className="post-container-comment">
        Comment deleted
      </li>
    );
  }

  return (
    <li key={comment_id} className="post-container-comment">
      <p className="author-info">{author}</p>
      <p className="timestamp">
        on {day} {month} {year}
      </p>
      <p className="comment-body">{body}</p>
      <VotePanel comment_id={comment_id} votes={votes} canVote={false} />
      <DeleteButton />
      {error ? <ErrorMessage /> : <></>}
    </li>
  );
}
