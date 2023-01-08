import { useState } from "react";
import "./styles.scss";
const BookEdit = ({ book, showEditState, handleToggle, editBook }) => {
  const [title, setTitle] = useState(book.title);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editBook(book.id, title);
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
