//! ─── Imports ─────────────────────────────────────────────────────────────────

//* ─── React Imports ───────────────────────────────────────────────────────────

import { useContext, useEffect } from "react";

//* ─── Imports ────────────────────────────────────────────────────────────

import "./App.scss";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/BooksContext/context";

//! ─── App Component ───────────────────────────────────────────────────────────

function App() {
  const { fetchBooks } = useContext(BooksContext);
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="App">
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
