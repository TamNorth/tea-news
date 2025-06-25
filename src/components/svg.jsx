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

export function MenuIcon() {
  return (
    <svg
      id="menu-icon"
      viewBox="0 0 100 100"
      strokeWidth="1rem"
      strokeLinecap="round"
    >
      <line x1="10" y1="10" x2="90" y2="10" />
      <line x1="10" y1="50" x2="90" y2="50" />
      <line x1="10" y1="90" x2="90" y2="90" />
    </svg>
  );
}
