export default function ErrorMessage({ err = null }) {
  const errMsgLookup = {
    valueMissing: "Please type something to submit",
    tooShort: "Comment must be longer to submit",
    login: "Please login to post a comment",
  };

  const errMsg = errMsgLookup[err] || "Something went wrong, please try again";

  return <section className="warning">{errMsg}</section>;
}
