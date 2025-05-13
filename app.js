const notes = [
  {
    title: "Note 01",
    category: "Test",
    content: "some content here",
  },
];

loadPage();

function loadPage() {
  const noteForm = document.querySelector(".note-form");
  const overlay = document.getElementById("overlay");

  showNotesInput(noteForm, overlay);
  closeNotesInput(noteForm, overlay);

  document.querySelector(".js-save-button").addEventListener("click", addNote);
}

function showNotesInput(noteForm, overlay) {
  const addButton = document.querySelector(".js-add-btn");

  addButton.addEventListener("click", operation);

  function operation() {
    overlay.classList.add("active");
    noteForm.classList.add("active");
  }
}

function closeNotesInput(noteForm, overlay) {
  const closeButton = document.querySelector(".close-notes-input");

  closeButton.addEventListener("click", operation);

  function operation() {
    overlay.classList.remove("active");
    noteForm.classList.remove("active");
  }
}

function addNote() {
  const title = document.querySelector(".js-title-input").value;
  const category = document.querySelector(".js-category-input").value;
  const content = document.querySelector(".js-content-input").value;

  notes.push({
    title,
    category,
    content,
  });

  console.log(notes);
}
