function addNote() {
  const addButton = document.querySelector(".js-add-btn");

  addButton.addEventListener("click", operation);

  function operation() {
    console.log("clicked");
  }
}

addNote();
