//! ─── Imports ─────────────────────────────────────────────────────────────────

//* ─── React Imports ───────────────────────────────────────────────────────────

import axios from "axios";
import { useEffect, useState } from "react";

//* ─── File Imports ────────────────────────────────────────────────────────────

import "./App.scss";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

//! ─── App Component ───────────────────────────────────────────────────────────

function App() {
  
  useEffect(() => {
    fetchBooks();
  }, []);

  
  return (
    <div className="App">
      <BookList
        books={books}
        deleteBook={deleteBookById}
        editBook={editBookTitle}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
