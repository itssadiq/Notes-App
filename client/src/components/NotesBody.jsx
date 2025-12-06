const NotesBody = ({ setShow, show }) => {
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

        <div className="notes js-notes"></div>
      </div>
    </>
  );
};

export default NotesBody;
