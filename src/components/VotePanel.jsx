import { useState } from "react";
import { patchArticle } from "../api";
import { VoteIcon } from "./svg";

export default function VotePanel({ article_id, votes, canVote }) {
  const [displayedVotes, setDisplayedVotes] = useState(votes);

  function handleVote(article_id, vote) {
    setDisplayedVotes(displayedVotes + 1);
    return patchArticle(article_id, vote);
  }

  function VoteButton({ canVote, amount }) {
    if (!canVote) {
      return (
        <button>
          {amount > 0 ? (
            <VoteIcon status="disabled" />
          ) : (
            <VoteIcon status="disabled" transform="rotate(180, 50, 50)" />
          )}
        </button>
      );
    } else {
      return (
        <button
          onClick={(e) => {
            handleVote(article_id, amount);
          }}
        >
          <VoteIcon transform={amount > 0 ? "" : "rotate(180, 50, 50)"} />
        </button>
      );
    }
  }

  return (
    <section id="voting-panel">
      <VoteButton canVote={canVote} amount={1} />
      <span id="vote-count">{displayedVotes}</span>
      <VoteButton canVote={canVote} amount={-1} />
    </section>
  );
}
