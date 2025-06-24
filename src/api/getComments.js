export default function getComments({ articleId }) {
  return fetch(
    `https://nc-news-gwte.onrender.com/api/articles/${articleId}/comments`
  )
    .then((res) => {
      return res.json();
    })
    .then(({ comments }) => {
      console.log(comments);
      return comments;
    });
}
