import { useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NotesBody from "./components/NotesBody";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <NotesBody setShow={setShow} show={show} />

      <NoteForm show={show} setShow={setShow} />
    </>
  );
}

export default App;
