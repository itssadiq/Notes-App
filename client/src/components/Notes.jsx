import React from "react";

const Notes = ({ notes }) => {
  return (
    <div className="notes js-notes">
      {notes.map((note) => {
        return (
          <div className="note-card" key={note.id}>
            <div className="note-title">
              <h3>{note.title}</h3>
              <button
                className="delete-button js-delete-button"
                data-index="${index}"
              >
                <i className="fas fa-trash"></i>
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
