export default function ErrorMessage({ err }) {
  let errMsg = "Something went wrong, please try again";
  if (err === "login") {
    errMsg = "please login to post a comment";
  }
  return <section className="warning">{errMsg}</section>;
}
