//! ─── Imports ─────────────────────────────────────────────────────────────────
//* ─── React Imports ───────────────────────────────────────────────────────────
//* ─── Files Imports ───────────────────────────────────────────────────────────
import BookShow from "../BookShow";
import "./styles.scss";

//! ─── BookList Component ──────────────────────────────────────────────────────

const BookList = ({ books, deleteBook, editBook }) => {
  const deleteBookById = (id) => {
    deleteBook(id);
  };

  const editBookTitle = (id, title) => {
    editBook(id, title);
  };
  const renderedBooks = books.map((book) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        deleteBook={deleteBookById}
        editBook={editBookTitle}
      />
    );
  });

  return (
    <div className="book-list d-flex row  p-5 justify-content-center">
      {renderedBooks}
    </div>
  );
};

export default BookList;
