//! ─── Imports ─────────────────────────────────────────────────────────────────

//* ─── React Imports ───────────────────────────────────────────────────────────
import { useState } from "react";
import BookEdit from "../BookEdit";
//* ─── Files Imports ───────────────────────────────────────────────────────────

import "./styles.scss";

//! ─── Bookshow Component ──────────────────────────────────────────────────────

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {};

  const handleEditToggle = () => {
    setShowEdit(!showEdit);
  };

  const toggleEditLS = (showEditState) => {
    setShowEdit(showEditState);
  };

  let content = (
    <div className=" mt-5 ">
      <img
        alt="photo"
        src={`https://picsum.photos/seed/${book.id}/250/200`}
        className="mb-2"
      />
      <h3 className="book-title">{book.title}</h3>
    </div>
  );
  if (showEdit) {
    content = (
      <BookEdit
        book={book}
        showEditState={showEdit}
        handleToggle={toggleEditLS}
      />
    );
  }
  return (
    <div className="book-show card col-lg-3 col-md-5 col-sm-12 py-3 px-5 my-3 mx-5 position-relative d-flex align-items-center justify-content-center">
      <div>{content}</div>
      <div className="actions mt-3 me-2">
        <button
          onClick={handleEditToggle}
          className="action btn__edit px-2 py-1 me-2 rounded-circle"
        >
          <i class="ph-pencil" style={{ fontSize: "2rem" }}></i>
        </button>
        <button
          onClick={handleDelete}
          className="action btn__delete px-2 py-1 me-2 rounded-circle"
        >
          <i class="ph-eraser" style={{ fontSize: "2rem" }}></i>
        </button>
      </div>
    </div>
  );
};

export default BookShow;
