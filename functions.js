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
              <div class="col">
                <div class="card h-100">
                  <h5 class="card-header">Note ${index + 1}</h5>
                  <div id="noteInfo" class="card-body d-flex flex-column align-content-between">
                    <p class="card-text">${element}</p>
                    <button name="note" id="${index}" class="col-6 col-md-8 align-self-center btn btn-danger">Delete Note</button>
                  </div>
                  <div class="card-footer text-muted text-center">
                    Created on ${new Date().toLocaleDateString().replaceAll('/', '-')}
                  </div>
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

