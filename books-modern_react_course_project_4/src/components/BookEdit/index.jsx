import { useContext, useState } from "react";
import BooksContext from "../../context/BooksContext/context";
import "./styles.scss";

const BookEdit = ({ book, onSubmit }) => {
  const { editBookTitle } = useContext(BooksContext);
  const [title, setTitle] = useState(book.title);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editBookTitle(book.id, title);
    onSubmit();
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
