export default function ErrorCard({ status }) {
  const errMsgLookup = {
    404: "not found",
  };
  const message = errMsgLookup[status];

  return (
    <section className="element">
      <h2>
        {status}: {message}
      </h2>
    </section>
  );
}
