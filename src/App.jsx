import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header, Articles, Article } from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/topics/:slug" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
