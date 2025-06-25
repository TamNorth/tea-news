import { getTimestampValues } from "../utils";
import VotePanel from "./VotePanel";

export default function CommentCard({ comment }) {
  const { comment_id, author, body, created_at, votes } = comment;
  const { year, month, day, hour, minute } = getTimestampValues(created_at);

  return (
    <li key={comment_id} className="post-container-comment">
      <p className="author-info">{author}</p>
      <p className="timestamp">
        on {day} {month} {year}
      </p>
      <p className="comment-body">{body}</p>
      <VotePanel comment_id={comment_id} votes={votes} canVote={false} />
    </li>
  );
}
