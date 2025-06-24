export default function CommentCard({ comment }) {
  return (
    <li key={comment.comment_id} className="sub-element">
      {comment.body}
    </li>
  );
}
