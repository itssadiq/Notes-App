const notes = JSON.parse(localStorage.getItem("notes")) || [];

loadPage();

function loadPage() {
  const noteForm = document.querySelector(".note-form");
  const overlay = document.getElementById("overlay");

  showNotesInput(noteForm, overlay);
  closeNotesInput(noteForm, overlay);
  renderNotes();
  renderCategory();

  document
    .querySelector(".js-save-button")
    .addEventListener("click", operation);

  function operation() {
    addNote();

    overlay.classList.remove("active");
    noteForm.classList.remove("active");
  }
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
  const titleElement = document.querySelector(".js-title-input");
  const title = titleElement.value;

  const categoryElement = document.querySelector(".js-category-input");
  const category = categoryElement.value;

  const contentElement = document.querySelector(".js-content-input");
  const content = contentElement.value;

  notes.push({
    title,
    category,
    content,
  });

  renderNotes();
  saveToStorage();

  titleElement.value = "";
  categoryElement.value = "";
  contentElement.value = "";
}

function updateNotesCategory() {
  let select = document.getElementById("js-category-options");

  let categoriesHTML = "";

  let existingCategories = [];

  notes.forEach((note) => {
    if (!existingCategories.includes(note.category)) {
      existingCategories.push(note.category);
      category = note.category;

      html = `
    <option value="${category}">${category}</option>
    `;

      categoriesHTML += html;
    }
  });

  select.innerHTML = `<option value="All notes" selected>All notes</option> + ${categoriesHTML}`;
}

function renderCategory() {
  const select = document.getElementById("js-category-options");

  select.addEventListener("change", operation);

  function operation() {
    const value = this.value;

    let notesHTML = "";

    notes.forEach((note, index) => {
      if (value === note.category) {
        let html = `
       <div class="note-card">
          <div class="note-title">
            <h3>${note.title}</h3>
            <button class="delete-button js-delete-button" data-index="${index}">
              <i class="fas fa-trash"></i>
            </button>
          </div>
          <div class="note-content">
            ${note.content}
          </div>
          <div class="note-category">
            <p class="category">${note.category}</p>
            <p class="date-time">13.05.2025 17:09</p>
          </div>
        </div>
    `;

        notesHTML += html;
      } else if (value === "All notes") {
        renderNotes();
      }
    });
    document.querySelector(".js-notes").innerHTML = notesHTML;
    deleteNote();
  }
}

function renderNotes() {
  let notesHTML = "";

  notes.forEach((note, index) => {
    let html = `
       <div class="note-card">
          <div class="note-title">
            <h3>${note.title}</h3>
            <button class="delete-button js-delete-button" data-index="${index}">
              <i class="fas fa-trash"></i>
            </button>
          </div>
          <div class="note-content">
            ${note.content}
          </div>
          <div class="note-category">
            <p class="category">${note.category}</p>
            <p class="date-time">13.05.2025 17:09</p>
          </div>
        </div>
    `;

    notesHTML += html;
  });

  document.querySelector(".js-notes").innerHTML = notesHTML;
  deleteNote();
  updateNotesCategory();
}

function saveToStorage() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function deleteNote() {
  const deleteButton = document.querySelectorAll(".js-delete-button");

  deleteButton.forEach((button) => {
    button.addEventListener("click", operation);

    function operation() {
      const index = button.dataset.index;

      notes.splice(index, 1);

      saveToStorage();
      renderNotes();
    }
  });
}
