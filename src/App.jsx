import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import MovieNavbar from "./components/MovieNavbar";
import Footer from "./components/Footer";
import AllRoute from "./AllRoute";

export default function App() {
  const storedTheme = localStorage.getItem("selectedTheme");
  const [mode, setMode] = useState(storedTheme ? JSON.parse(storedTheme) : false);

  const handleMode = () => {
    setMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("selectedTheme", JSON.stringify(mode));
  }, [mode]);

  return (
    <div>
      <MovieNavbar handleMode={handleMode} mode={mode} />

      <main>
        <AllRoute mode={mode}/>
      </main>

      <Footer mode={mode}/>
      {/* <MovieMain type="popular" title="Popular" emoji="bxs-hot" mode={mode} />
      <MovieMain type="top_rated" title="Top Rated" emoji="bxs-star" mode={mode} />
      <MovieMain type="upcoming" title="Upcoming" emoji="bxs-alarm-exclamation" mode={mode} /> */}
    </div>
  );
}
