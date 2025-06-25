export function VoteIcon({ status, transform }) {
  return (
    <svg viewBox="0 0 100 100">
      <polygon
        points="50,7 100,93 0,93"
        className={status}
        transform={transform}
      />
    </svg>
  );
}
