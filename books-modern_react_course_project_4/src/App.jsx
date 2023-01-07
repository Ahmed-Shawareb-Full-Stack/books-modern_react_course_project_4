//! ─── Imports ─────────────────────────────────────────────────────────────────

//* ─── React Imports ───────────────────────────────────────────────────────────

import { useState, useEffect } from "react";

//* ─── File Imports ────────────────────────────────────────────────────────────

import "./App.scss";
import BookCreate from "./components/BookCreate";

//! ─── App Component ───────────────────────────────────────────────────────────

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log(`Book Created :${title}`);
  };

  useEffect;

  return (
    <div className="App">
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
