import { capitalise } from "../utils";

export default function ArticleCard({ article }) {
  const { article_img_url, author, comment_count, created_at, title, votes } =
    article;

  console.dir(created_at);
  console.log(typeof created_at);

  const topic = capitalise(article.topic);

  return (
    <button id="article-card" className="element">
      <img src={article_img_url} alt="article image" />
      <div>
        <h2>{title}</h2>
        <p className="author-info">by {author}</p>
        <p className="timestamp">on {created_at}</p>
        <p className="topic-info">in {topic}</p>
        <p>votes: {votes}</p>
        <p>comments: {comment_count}</p>
      </div>
    </button>
  );
}
