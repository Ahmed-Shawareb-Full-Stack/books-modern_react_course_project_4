//! ─── Imports ─────────────────────────────────────────────────────────────────

//* ─── React Imports ───────────────────────────────────────────────────────────

import axios from "axios";
import { useContext, useEffect, useState } from "react";

//* ─── File Imports ────────────────────────────────────────────────────────────

import "./App.scss";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books/context";

//! ─── App Component ───────────────────────────────────────────────────────────

function App() {
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  
  return (
    <div className="App">
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
