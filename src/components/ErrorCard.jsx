export default function ErrorCard({ status, message = null }) {
  const errMsgLookup = {
    404: "not found",
  };
  message = message || errMsgLookup[status];

  return (
    <section className="element">
      <h2>
        {status}: {message}
      </h2>
    </section>
  );
}
