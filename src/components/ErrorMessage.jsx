export default function ErrorMessage({ err = null }) {
  let errMsg = "Something went wrong, please try again";
  if (err === "tooShort") {
    errMsg = "comment must be longer to submit";
  }
  if (err === "login") {
    errMsg = "please login to post a comment";
  }
  return <section className="warning">{errMsg}</section>;
}
