import { patchArticle } from "../api";
import { VoteIcon } from "./svg";

export default function VotePanel({ article_id, votes }) {
  return (
    <section id="voting-panel">
      <button
        onClick={(e) => {
          patchArticle(article_id, 1);
        }}
      >
        <VoteIcon />
      </button>
      <span id="vote-count">{votes}</span>
      <button
        onClick={(e) => {
          patchArticle(article_id, -1);
        }}
      >
        <VoteIcon transform="rotate(180, 50, 50)" />
      </button>
    </section>
  );
}
