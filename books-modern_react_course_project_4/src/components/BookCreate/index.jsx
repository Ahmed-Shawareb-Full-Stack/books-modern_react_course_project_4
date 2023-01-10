//! ─── Imports ─────────────────────────────────────────────────────────────────

//* ─── React Imports ───────────────────────────────────────────────────────────

import { useState, useEffect, useContext } from "react";

//* ─── File Import ─────────────────────────────────────────────────────────────
import "./styles.scss";
import axios from "axios";
import BooksContext from "../../context/books/context";

//! ─── BookCreate Component ────────────────────────────────────────────────────

const BookCreate = () => {
  const books = useContext(BooksContext);
  const [booksState, setBooksState] = useState(books);
  const [bookTitle, setBookTitle] = useState("");

  const handleInputChange = (event) => {
    setBookTitle(event.target.value);
  };

  const resetField = (event) => {
    event.target.value = "";
    setBookTitle(event.target.value);
  };
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updatedBooks = [...booksState, response.data];
    console.log(updatedBooks);
    setBooksState(updatedBooks);
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    createBook(bookTitle);
    resetField(event);
  };
  return (
    <div className="container-fluid form__container--create-book">
      <div className="row form">
        <form onSubmit={handelSubmit} className="form__create-book">
          <p className="form__title">Add a Book</p>
          <label className="form__label form-label">Title</label>
          <input
            type="text"
            onChange={handleInputChange}
            value={bookTitle}
            name="bookTitle"
            className="form__input-title form-control"
          />
          <button type="submit" className="form__btn-submit btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookCreate;
