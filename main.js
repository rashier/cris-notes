import { showNotes, deleteNote } from "./functions.js";

document.querySelector("#app").innerHTML = `
      <div class="container m-5 ">
          <h1 class="text-white mb-4">Cris Notes 🗒️</h1>
          <hr>
          <div class="card w-50 mb-4">
            <h5 class="card-header">Add a note</h5>
              <div class="card-body">
              <div class="form-group">
                  <textarea id="addTxt" rows="4" class="form-control"></textarea>
              </div>
              <button class="btn btn-primary" id="addBtn">Add Note</button>
              </div>
          </div>
          <h1 class="text-white">Your Notes</h1>
          <hr>
          <div id="notes" class="row row-cols-1 row-cols-md-4 g-3"></div>
      </div>
  `;

let notesObj = [];
showNotes(notesObj);

// If user adds a note, save it to the localStorage

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", (e) => {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  showNotes(notesObj);
});


// If user delete a note, erase it to the localStorage

let notes = document.getElementById("notes");

notes.addEventListener('click', (event) => 
  event.target.name === 'note' ? deleteNote(event.target.id, notesObj) : ''
);