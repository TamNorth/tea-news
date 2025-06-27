import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header, HomePage, Article } from "./components";
import ErrorCard from "./components/ErrorCard";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/topics/:topic" element={<HomePage />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route
          path="*"
          element={
            <main>
              <ErrorCard
                status={404}
                message={
                  "Oops! You tried to visit a part of the site that doesn't exist."
                }
              />
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
