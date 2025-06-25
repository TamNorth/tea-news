import { useState } from "react";
import { patchArticle } from "../api";
import { VoteIcon } from "./svg";

export default function VotePanel({
  article_id = null,
  comment_id = null,
  votes,
  canVote,
}) {
  const [displayedVotes, setDisplayedVotes] = useState(votes);
  const [voteHistory, setVoteHistory] = useState(0);
  const [voteError, setVoteError] = useState(false);
  const elementType = comment_id ? "comment" : article_id ? "article" : null;

  function handleVote(article_id, vote) {
    function castVote(vote) {
      setDisplayedVotes(displayedVotes + vote);
      setVoteHistory(voteHistory + vote);
      setVoteError(false);
      patchArticle(article_id, vote).catch(() => {
        setVoteHistory(voteHistory);
        setDisplayedVotes(displayedVotes);
        setVoteError(true);
      });
    }

    if (Math.sign(voteHistory) === Math.sign(vote)) {
      castVote(-vote);
    } else if (voteHistory === 0) {
      castVote(vote);
    } else if (-Math.sign(voteHistory) === Math.sign(vote)) {
      castVote(2 * vote);
    }
  }

  function VoteButton({ canVote, amount }) {
    if (!canVote) {
      return (
        <>
          {amount > 0 ? (
            <VoteIcon status="disabled" />
          ) : (
            <VoteIcon status="disabled" transform="rotate(180, 50, 50)" />
          )}
        </>
      );
    } else {
      return (
        <button
          onClick={(e) => {
            handleVote(article_id, amount);
          }}
        >
          <VoteIcon
            status={
              Math.sign(voteHistory) === Math.sign(amount) ? "activated" : ""
            }
            transform={amount > 0 ? "" : "rotate(180, 50, 50)"}
          />
        </button>
      );
    }
  }

  return (
    <>
      <section className={`voting-panel-${elementType}`}>
        <VoteButton canVote={canVote} amount={1} />
        <span id={`vote-count-${elementType}`}>{displayedVotes}</span>
        <VoteButton canVote={canVote} amount={-1} />
      </section>
      {voteError ? <p class="warning">please try again</p> : <></>}
    </>
  );
}
