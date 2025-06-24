export default function getArticles() {
  return fetch("https://nc-news-gwte.onrender.com/api/articles")
    .then((res) => {
      return res.json();
    })
    .then(({ articles }) => {
      return articles;
    });
}
