import React, { useState } from "react";
import dayjs from "dayjs";

const NoteForm = ({
  show,
  setShow,
  loadNotes,
  editNote,
  isEditing,
  setIsEditing,
}) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const closeNotesInput = () => {
    setShow(false);
    setIsEditing(false);
  };

  const handleTitleInput = (e) => {
    const value = e.target.value;

    setTitle(value);
  };

  const handleCategoryInput = (e) => {
    const value = e.target.value;

    setCategory(value);
  };

  const handleContentInput = (e) => {
    const value = e.target.value;

    setContent(value);
  };

  const saveNote = async () => {
    if (title === "") {
      alert("Title is required");
    } else if (category === "") {
      alert("Category is required");
    } else if (content === "") {
      alert("Content is required");
    } else {
      const currentDate = dayjs().format("DD/MM/YYYY");
      const currentTime = dayjs().format("HH:mm");
      const currentDateTime = `${currentDate} ${currentTime}`;
      const data = {
        title,
        category,
        content,
        currentDateTime,
      };

      const response = await fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Server Response", result);

      setTitle("");
      setCategory("");
      setContent("");

      setShow(false);

      loadNotes();
    }
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
        <input
          type="text"
          id="title"
          className="js-title-input"
          onChange={handleTitleInput}
          value={isEditing ? editNote.title : title}
        />
      </div>
      <div className="form-category">
        <label for="category">Category</label>
        <input
          type="text"
          id="category"
          className="js-category-input"
          onChange={handleCategoryInput}
          value={isEditing ? editNote.category : category}
        />
      </div>
      <div className="form-content">
        <label for="content">Content</label>
        <textarea
          name=""
          id="content"
          rows="10"
          className="js-content-input"
          onChange={handleContentInput}
          value={isEditing ? editNote.content : content}
        ></textarea>
      </div>
      <button className="save-button js-save-button" onClick={saveNote}>
        {isEditing ? "Update" : "Save Note"}
      </button>
    </div>
  );
};

export default NoteForm;
