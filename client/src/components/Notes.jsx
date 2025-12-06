import React from "react";

const Notes = ({ notes, loadNotes }) => {
  const deleteNote = async (id) => {
    const response = await fetch("http://localhost:3000/notes", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const result = await response.json();
    console.log("Server Resoponse ===>", result);

    loadNotes();
  };

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
                <i
                  className="fas fa-trash"
                  onClick={() => {
                    deleteNote(note.id);
                  }}
                ></i>
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
