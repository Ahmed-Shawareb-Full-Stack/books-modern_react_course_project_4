//! ─── Imports ─────────────────────────────────────────────────────────────────

//* ─── React Imports ───────────────────────────────────────────────────────────

import React from "react";
import { useState, useEffect } from "react";

//* ─── File Import ─────────────────────────────────────────────────────────────
import "./styles.scss";

//! ─── BookCreate Component ────────────────────────────────────────────────────

const BookCreate = ({ onCreate }) => {
  const [bookTitle, setBookTitle] = useState("");

  const handleInputChange = (event) => {
    setBookTitle(event.target.value);
  };

  const resetField = (event) => {
    event.target.value = "";
    setBookTitle(event.target.value);
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    onCreate(bookTitle);
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
