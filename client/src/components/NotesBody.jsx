const NotesBody = ({ setShow, show, notes }) => {
  const showNotesInput = () => {
    setShow(true);
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
          />
          <select name="" id="js-category-options">
            <option value="" selected>
              All notes
            </option>
          </select>
          <button onClick={showNotesInput}>+Add</button>
        </div>

        <div className="notes js-notes">
          {notes.map((note) => {
            return (
              <div className="note-card">
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
      </div>
    </>
  );
};

export default NotesBody;
