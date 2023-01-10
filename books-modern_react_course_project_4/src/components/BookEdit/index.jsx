import { useContext, useState } from "react";
import BooksContext from "../../context/books/context";
import "./styles.scss";
import axios from "axios";

const BookEdit = ({ book, showEditState, handleToggle }) => {
  const { setBooks, books } = useContext(BooksContext);
  const [title, setTitle] = useState(book.title);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const editBookTitle = async (title) => {
    const response = await axios.put(`http://localhost:3001/books/${book.id}`, {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    editBookTitle(title);
    handleToggle(!showEditState);
  };
  return (
    <div className="edit">
      <form className="edit-form" onSubmit={handleSubmit}>
        <label className="edit-form__label form-label">Title</label>
        <input
          className="form-control edit-form__input-title"
          type="text"
          onChange={handleChange}
          value={title}
        />
        <button
          type="submit"
          className="btn edit-form__btn-submit mt-3 py-2 px-4"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default BookEdit;
