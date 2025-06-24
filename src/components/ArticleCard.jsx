import { capitalise, getTimestampValues } from "../utils";

export default function ArticleCard({ article }) {
  const { article_img_url, author, comment_count, title, votes } = article;
  const topic = capitalise(article.topic);
  const { year, month, day, hour, minute } = getTimestampValues(
    article.created_at
  );

  return (
    <button id="article-card" className="element">
      <img src={article_img_url} alt="article image" />
      <div>
        <h2>{title}</h2>
        <p className="author-info">by {author}</p>
        <p className="timestamp">
          on {day} {month} {year}
        </p>
        <p className="topic-info">in {topic}</p>
        <p>votes: {votes}</p>
        <p>comments: {comment_count}</p>
      </div>
    </button>
  );
}
