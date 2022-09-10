// Function to show elements from localStorage
export function showNotes(notesObj) {
  let notes = localStorage.getItem('notes')
  let html = ''
  let notesElm = document.getElementById('notes')

  if (notes == null) {
    notesObj = []
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.forEach(function(element, index) {
    html += `
              <div class="col-3 card p-0 ">
                <h5 class="card-header">Note ${index + 1}</h5>
                <div id="noteInfo" class="card-body">
                  <p class="card-text">${element}</p>
                  <button name="note" id="${index}" class="btn btn-danger">Delete Note</button>
                </div>
                <div class="card-footer text-muted text-center">
                  Created on ${new Date().toLocaleDateString().replaceAll('/', '-')}
                </div>
              </div>
            `
  });

  if (notesObj.length != 0) {
    notesElm.innerHTML = html
  } else {
    notesElm.innerHTML = 'Nothing to show! Create your first Note!'
  }
}

// Function to delete a note
export function deleteNote(id, notesObj) {
  let notes = localStorage.getItem('notes')
  if (notes == null) {
    notesObj = []
  } else {
    notesObj = JSON.parse(notes)
  }

  notesObj.splice(id, 1)
  localStorage.setItem('notes', JSON.stringify(notesObj))
  showNotes()
}

