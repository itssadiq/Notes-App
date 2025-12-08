import { useEffect, useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NotesBody from "./components/NotesBody";

function App() {
  const [notes, setNotes] = useState([]);
  const [show, setShow] = useState(false);
  const [editNote, setEditNote] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const loadNotes = async () => {
    const response = await fetch("http://localhost:3000/get-notes");

    const data = await response.json();

    setNotes(data.notes);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <>
      <NotesBody
        setShow={setShow}
        show={show}
        notes={notes}
        loadNotes={loadNotes}
        setEditNote={setEditNote}
        setIsEditing={setIsEditing}
      />

      <NoteForm
        show={show}
        setShow={setShow}
        loadNotes={loadNotes}
        editNote={editNote}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    </>
  );
}

export default App;
