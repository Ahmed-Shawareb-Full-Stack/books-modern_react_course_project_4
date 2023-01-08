//! ─── Imports ─────────────────────────────────────────────────────────────────

//* ─── React Imports ───────────────────────────────────────────────────────────

import { useState } from "react";

//* ─── File Imports ────────────────────────────────────────────────────────────

import "./App.scss";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

//! ─── App Component ───────────────────────────────────────────────────────────

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      if (book.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setBooks(updatedBooks);
  };

  const editBookTitle = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
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
