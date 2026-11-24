const button = document.querySelector("#create-button");
const stickyNotes = document.querySelector("#sticky-notes");
const textarea = document.querySelector("#note-add");
const originalPlaceholder = textarea.placeholder;

textarea.addEventListener("input", () => {
  textarea.placeholder = originalPlaceholder;
});

button.addEventListener("click", (e) => {
  if (textarea.value.trim() === "") {
    textarea.placeholder = "Please enter some text...";
    return;
  }

  const noteDiv = document.createElement("div");
  const noteP = document.createElement("p");
  const noteButton = document.createElement("button");

  stickyNotes.appendChild(noteDiv);
  noteDiv.appendChild(noteButton);
  noteDiv.appendChild(noteP);

  noteDiv.classList.add("note");
  noteButton.classList.add("note-button");
  noteP.classList.add("note-p");

  noteButton.textContent = "x";

  noteP.textContent = textarea.value.trim();
  textarea.value = "";
  textarea.placeholder = originalPlaceholder;
});

stickyNotes.addEventListener("click", (e) => {
  if (e.target.classList.contains("note-button")) {
    e.target.parentElement.remove();
  }
});
