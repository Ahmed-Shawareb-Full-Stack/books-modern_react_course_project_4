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
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const { data } = await axios.get("http://localhost:3001/books");
    setBooks(data);
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const editBookTitle = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
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
