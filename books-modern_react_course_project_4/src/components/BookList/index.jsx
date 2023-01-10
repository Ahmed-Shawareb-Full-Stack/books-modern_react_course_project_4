//! ─── Imports ─────────────────────────────────────────────────────────────────
//* ─── React Imports ───────────────────────────────────────────────────────────
import { useContext } from "react";
//* ─── Files Imports ───────────────────────────────────────────────────────────
import BooksContext from "../../context/BooksContext/context";
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
