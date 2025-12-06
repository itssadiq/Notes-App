import React from "react";

const NoteForm = ({ show, setShow }) => {
  const closeNotesInput = () => {
    setShow(false);
  };
  return (
    <div className={show ? "note-form active" : "note-form"}>
      <div className="note-form-heading">
        <h3>New Note</h3>
        <button className="close-notes-input" onClick={closeNotesInput}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="form-title">
        <label for="title">Title</label>
        <input type="text" id="title" className="js-title-input" />
      </div>
      <div className="form-category">
        <label for="category">Category</label>
        <input type="text" id="category" className="js-category-input" />
      </div>
      <div className="form-content">
        <label for="content">Content</label>
        <textarea
          name=""
          id="content"
          rows="10"
          className="js-content-input"
        ></textarea>
      </div>
      <button className="save-button js-save-button">Save Note</button>
    </div>
  );
};

export default NoteForm;
