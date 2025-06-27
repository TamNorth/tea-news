import { useSearchParams } from "react-router-dom";

export const paramsLookup = {
  date: "created_at",
  comments: "comment_count",
  votes: "votes",
};

function makeFetch(path, options = undefined) {
  const baseUrl = "https://nc-news-gwte.onrender.com/api/";
  return fetch(`${baseUrl}${path}`, options)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      // console.log(res);
      return res;
    })
    .catch((err) => console.log(err));
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
    return article;
  });
}

export function getArticle(article_id) {
  const path = `articles/${article_id}`;
  return makeFetch(path).then(({ article }) => {
    return article;
  });
}

export function getArticles(topicSlug = null, searchParams) {
  let path = "articles";
  let queryJoiner = "?";

  const topicQuery = topicSlug ? `topic=${topicSlug}` : null;

  const orderParam =
    searchParams.get("order") !== "undefined"
      ? searchParams.get("order")
      : null;
  const orderQuery = orderParam ? `order=${orderParam}` : null;

  const sortByParam =
    searchParams.get("sort_by") !== "undefined"
      ? searchParams.get("sort_by")
      : null;
  const sortByQuery = sortByParam
    ? `sort_by=${paramsLookup[sortByParam]}`
    : null;

  const queries = [topicQuery, sortByQuery, orderQuery];
  queries.forEach((query) => {
    if (query) {
      path += `${queryJoiner}${query}`;
      queryJoiner = "&";
    }
  });
  // console.log(path);
  return makeFetch(path).then(({ articles }) => {
    return articles;
  });
}

export function getComments(article_id) {
  const path = `articles/${article_id}/comments`;
  return makeFetch(path).then(({ comments }) => {
    return comments;
  });
}

export function postComment({ article_id, username, body }) {
  const path = `articles/${article_id}/comments`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, body }),
  };
  return makeFetch(path, options).then(({ comment }) => {
    return comment;
  });
}

export function getUsers() {
  const path = `users`;
  return makeFetch(path).then(({ users }) => {
    return users;
  });
}

export function deleteComment(comment_id) {
  const path = `comments/${comment_id}`;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return makeFetch(path, options).then((res = null) => {
    if (res) {
      throw { status: 500 };
    }
  });
}

export function getTopics() {
  const path = `topics`;
  return makeFetch(path).then(({ topics }) => {
    return topics;
  });
}
