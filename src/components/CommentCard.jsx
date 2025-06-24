import { getTimestampValues } from "../utils";

export default function CommentCard({ comment }) {
  const { author, body, created_at, votes } = comment;
  const { year, month, day, hour, minute } = getTimestampValues(created_at);

  return (
    <li key={comment.comment_id} className="sub-element">
      <p className="author-info">{author}</p>
      <p className="timestamp">
        on {day} {month} {year}
      </p>
      <p className="comment-body">{body}</p>
      <p className="vote-count">Votes: {votes}</p>
    </li>
  );
}
