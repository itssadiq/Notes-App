import { useState } from "react";
import Notes from "./Notes";

const NotesBody = ({
  setShow,
  show,
  notes,
  loadNotes,
  setEditNote,
  setIsEditing,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("All notes");
  const [searchText, setSearchText] = useState("");

  const showNotesInput = () => {
    setShow(true);
  };

  let existingCategories = [];

  notes.forEach((note) => {
    if (!existingCategories.includes(note.category)) {
      existingCategories.push(note.category);
    }
  });

  const categoryFiltered =
    selectedCategory === "All notes"
      ? notes
      : notes.filter((n) => n.category === selectedCategory);

  const filteredNotes = categoryFiltered.filter((n) => {
    const q = searchText.trim().toLowerCase();
    if (!q) return true; // no search → keep all in the selected category
    const title = (n.title || "").toLowerCase();
    const content = (n.content || "").toLowerCase();
    return title.includes(q) || content.includes(q);
  });

  const handleSearchBar = (e) => {
    const value = e.target.value;

    setSearchText(value);
  };

  return (
    <>
      <div className={show ? "active overlay" : "overlay"} id="overlay"></div>
      <div className="main">
        <div className="header">
          <h1>Note Book</h1>
          <p>Store your thoughts and ideas</p>
        </div>
        <div className="navbar">
          <input
            type="text"
            placeholder="Search notes"
            className="js-search-bar"
            value={searchText}
            onChange={handleSearchBar}
          />
          <select
            name=""
            id="js-category-options"
            onChange={(e) => {
              setSelectedCategory(e.target.value);
            }}
            value={selectedCategory}
          >
            <option value="All notes">All notes</option>
            {existingCategories.map((cat) => {
              return (
                <option value={cat} key={cat}>
                  {cat}
                </option>
              );
            })}
          </select>
          <button onClick={showNotesInput}>+Add</button>
        </div>

        <Notes
          loadNotes={loadNotes}
          filteredNotes={filteredNotes}
          setShow={setShow}
          setEditNote={setEditNote}
          notes={notes}
          setIsEditing={setIsEditing}
        />
      </div>
    </>
  );
};

export default NotesBody;
