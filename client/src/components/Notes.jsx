import React from "react";

const Notes = ({
  filteredNotes,
  loadNotes,
  setShow,
  setEditNote,
  notes,
  setIsEditing,
}) => {
  const deleteNote = async (id) => {
    const response = await fetch(`http://localhost:3000/delete-note/${id}`, {
      method: "DELETE",
    });

    const result = await response.json();
    console.log("Server Resoponse ===>", result);

    loadNotes();
  };

  const editNote = (id) => {
    const data = notes.find((n) => n._id === id);
    setEditNote(data);
    setIsEditing(true);

    setShow(true);
  };

  return (
    <div className="notes js-notes">
      {filteredNotes.map((note) => {
        return (
          <div className="note-card" key={note._id}>
            <div className="note-title">
              <h3>{note.title}</h3>
              <button
                className="delete-button js-delete-button"
                data-index="${index}"
                onClick={() => {
                  deleteNote(note._id);
                }}
              >
                <i className="fas fa-trash"></i>
              </button>
              <button
                className="delete-button"
                onClick={() => {
                  editNote(note._id);
                }}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            </div>
            <div className="note-content">{note.content}</div>
            <div className="note-category">
              <p className="category">{note.category}</p>
              <p className="date-time">{note.currentDateTime}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
