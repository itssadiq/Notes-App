import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    if (isEditing && editNote) {
      setTitle(editNote.title || "");
      setCategory(editNote.category || "");
      setContent(editNote.content || "");
    } else if (!isEditing) {
      setTitle("");
      setCategory("");
      setContent("");
    }
  }, [isEditing, editNote]);

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
    let data;
    const currentDate = dayjs().format("DD/MM/YYYY");
    const currentTime = dayjs().format("HH:mm");
    const currentDateTime = `${currentDate} ${currentTime}`;
    if (!isEditing) {
      if (title === "") {
        alert("Title is required");
      } else if (category === "") {
        alert("Category is required");
      } else if (content === "") {
        alert("Content is required");
      } else {
        data = {
          title,
          category,
          content,
          currentDateTime,
        };

        sendDataToDB(data);
      }
    } else {
      if (editNote.title === "") {
        alert("Title is required");
      } else if (editNote.category === "") {
        alert("Category is required");
      } else if (editNote.content === "") {
        alert("Content is required");
      } else {
        data = {
          id: editNote._id,
          title,
          category,
          content,
          currentDateTime,
        };

        sendDataToDB(data);
      }
    }
  };

  const sendDataToDB = async (data) => {
    if (data.id) {
      console.log("ID mil gayi");
    } else {
      const response = await fetch("http://localhost:3000/create-note", {
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
      setIsEditing(false);
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
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="js-title-input"
          onChange={handleTitleInput}
          value={title}
        />
      </div>
      <div className="form-category">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          className="js-category-input"
          onChange={handleCategoryInput}
          value={category}
        />
      </div>
      <div className="form-content">
        <label htmlFor="content">Content</label>
        <textarea
          name=""
          id="content"
          rows="10"
          className="js-content-input"
          onChange={handleContentInput}
          value={content}
        ></textarea>
      </div>
      <button className="save-button js-save-button" onClick={saveNote}>
        {isEditing ? "Update" : "Save Note"}
      </button>
    </div>
  );
};

export default NoteForm;
