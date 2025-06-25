import { patchArticle } from "../api/api";
import { VoteIcon } from "./svg";

export default function VotePanel({ article_id }) {
  console.log(article_id);
  return (
    <section id="voting-panel">
      <button
        onClick={(e) => {
          patchArticle(article_id, 1);
        }}
      >
        <VoteIcon />
      </button>
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
