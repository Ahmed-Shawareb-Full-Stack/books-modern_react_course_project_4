//! ─── Imports ─────────────────────────────────────────────────────────────────
//* ─── React Imports ───────────────────────────────────────────────────────────
//* ─── Files Imports ───────────────────────────────────────────────────────────
import { useContext } from "react";
import BooksContext from "../../context/books/context";
import BookShow from "../BookShow";
import "./styles.scss";

//! ─── BookList Component ──────────────────────────────────────────────────────

const BookList = () => {
  const { books } = useContext(BooksContext);
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return (
    <div className="book-list d-flex row  p-5 justify-content-center">
      {renderedBooks}
    </div>
  );
};

export default BookList;
