import { useEffect, useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NotesBody from "./components/NotesBody";

function App() {
  const [notes, setNotes] = useState([]);
  const [show, setShow] = useState(false);

  const loadNotes = async () => {
    const response = await fetch("http://localhost:3000/notes");

    const data = await response.json();

    setNotes(data);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <>
      <NotesBody setShow={setShow} show={show} notes={notes} />

      <NoteForm show={show} setShow={setShow} />
    </>
  );
}

export default App;
