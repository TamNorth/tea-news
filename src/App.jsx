import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header, HomePage, Article } from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/topics/:topic" element={<HomePage />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
