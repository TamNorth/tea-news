import { useState } from "react";
import { capitalise, getTimestampValues } from "../utils";
import VotePanel from "./VotePanel";
import ErrorCard from "./ErrorCard";

export default function ArticleCard({ article, canVote }) {
  const [error, setError] = useState(article ? null : "404");

  if (error) {
    return <ErrorCard status={error} message={`Article doesn't exist`} />;
  }

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
