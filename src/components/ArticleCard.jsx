export default function ArticleCard({ article }) {
  const {
    article_img_url,
    author,
    comment_count,
    created_at,
    title,
    topic,
    votes,
  } = article;

  return (
    <button id="article-card" className="element">
      <img src={article_img_url} alt="article image" />
      <div>
        <h2>{title}</h2>
        <p>by {author}</p>
        <p>on {created_at}</p>
        <p>in {topic}</p>
        <p>votes: {votes}</p>
        <p>comments: {comment_count}</p>
      </div>
    </button>
  );
}
