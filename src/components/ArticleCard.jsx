import { capitalise, getTimestampValues } from "../utils";
import VotePanel from "./VotePanel";

export default function ArticleCard({ article, canVote }) {
  const {
    article_id,
    article_img_url,
    author,
    comment_count,
    created_at,
    title,
    votes,
  } = article;
  const body = article?.body;
  const topic = capitalise(article.topic);
  const { year, month, day, hour, minute } = getTimestampValues(created_at);

  return (
    <section id="article-card" className="element">
      <img src={article_img_url} alt="article image" />
      <div>
        <h2>{title}</h2>
        <div className="post-container-article">
          <p className="author-info">{author}</p>
          <p className="timestamp">
            {day} {month} {year}
          </p>
          <p className="topic-info">in {topic}</p>
          <p className="article-body">{body ? body : ""}</p>
          <p className="comment-count">{comment_count} comments</p>
          <VotePanel article_id={article_id} votes={votes} canVote={canVote} />
        </div>
      </div>
    </section>
  );
}
