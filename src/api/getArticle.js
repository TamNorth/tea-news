export default function getArticles(article_id) {
  return fetch(`https://nc-news-gwte.onrender.com/api/articles/${article_id}`)
    .then((res) => {
      return res.json();
    })
    .then((article) => {
      return article;
    });
}
