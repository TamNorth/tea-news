const baseUrl = "https://nc-news-gwte.onrender.com/api/";

function makeFetch(path, options = undefined) {
  console.log(`${baseUrl}${path}`);
  console.log(options);
  return fetch(`${baseUrl}${path}`, options)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      return res;
    });
}

export function patchArticle(article_id, vote) {
  const path = `articles/${article_id}`;
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inc_votes: vote }),
  };
  return makeFetch(path, options).then(({ article }) => {
    console.log(article);
  });
}
