import Notes from "./Notes";

const NotesBody = ({ setShow, show, notes, loadNotes }) => {
  const showNotesInput = () => {
    setShow(true);
  };

  let existingCategories = [];

  notes.forEach((note) => {
    if (!existingCategories.includes(note.category)) {
      existingCategories.push(note.category);
    }
  });

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
          />
          <select name="" id="js-category-options">
            <option value="" selected>
              All notes
            </option>
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

        <Notes notes={notes} loadNotes={loadNotes} />
      </div>
    </>
  );
};

export default NotesBody;
