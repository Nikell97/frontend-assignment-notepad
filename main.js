let noteList = document.querySelector(".note-list");
let noteDeleteButton = document.getElementsByClassName("delete");
let form = document.querySelector('form');
let numberOfActiveNotesDisplay = document.getElementById("numberOfActiveNotes");
let showAllButton = document.getElementById('all');
let showActiveButton = document.getElementById('active');
let showCompletedButton = document.getElementById('completed');
let clearCompletedButton = document.getElementById('clear');

let activeNotes = 0;

clearCompletedButton.style.display = "none";

form.onsubmit = async event => {
  event.preventDefault();
  printItem();
}

function printItem() {
  let noteListItem = document.createElement('li')
  let noteListDoneButton = document.createElement('input');
  let noteListText = document.createElement('lable');
  let noteListDeleteButton = document.createElement('span');

  noteListItem.className = "item";

  noteListDoneButton.className = "toggle";
  noteListDoneButton.type = "checkbox";
  noteListDoneButton.addEventListener("click", function () {
    updateNumberOfActiveNotes();
    hideClearCompletedButton();
    changeClearedNoteDisplay();
  })

  noteListText.textContent = " " + form.input.value + " ";

  noteListDeleteButton.className = "delete"
  noteListDeleteButton.addEventListener("click", function () {
    noteListItem.remove();
    updateNumberOfActiveNotes();
  })
  noteListDeleteButton.innerHTML = "❌"

  noteList.append(noteListItem)
  noteListItem.append(noteListDoneButton);
  noteListItem.append(noteListText);
  noteListItem.append(noteListDeleteButton);
  form.reset();
  updateNumberOfActiveNotes();
  hideClearCompletedButton();
  changeClearedNoteDisplay();
}

//updates counter that shows number of current active notes
function updateNumberOfActiveNotes() {
  activeNotes = 0;
  let notes = document.getElementsByClassName("toggle");
  for (note of notes) {
    if (note.checked == false) {
      activeNotes += 1;
    }
  }
  numberOfActiveNotesDisplay.textContent = "Number of active notes: " + activeNotes;
}

function hideClearCompletedButton() {
  let checkbox = document.getElementsByClassName("toggle");
  for (box of checkbox) {
    if (box.checked){
      clearCompletedButton.style.display = "flex";
      return;
    }
    else {
      clearCompletedButton.style.display = "none";
    }
  }
}

function changeClearedNoteDisplay() {
  let checkbox = document.getElementsByClassName("toggle");
  for (box of checkbox){
    if (box.checked) {
      box.nextElementSibling.classList.add("completed");
    }
    else {
      box.nextElementSibling.classList.remove("completed");
    }
  }
}

//removes any filter to show all notes
showAllButton.addEventListener("click", function () {
  let checkbox = document.getElementsByClassName("toggle");
  for (box of checkbox) {
    box.parentNode.style.display = 'flex';
  }
});

//filters all notes so that only active notes are shown
showActiveButton.addEventListener("click", function () {
  let checkbox = document.getElementsByClassName("toggle");
  for (box of checkbox) {
    if (box.checked == true) {
      box.parentNode.style.display = 'none';
    }
    else {
      box.parentNode.style.display = 'flex';
    }
  }
});

//filters all notes so that only completed notes are shown
showCompletedButton.addEventListener("click", function () {
  let checkbox = document.getElementsByClassName("toggle");
  for (box of checkbox) {
    if (box.checked == false) {
      box.parentNode.style.display = 'none';
    }
    else {
      box.parentNode.style.display = 'flex';
    }
  }
});


//removes all notes that are checked as completed when pressing the Clear Completed button
clearCompletedButton.addEventListener("click", function() {
  let items = document.querySelectorAll(".item");
  for (let i = 0; i < items.length; i++) {
    let checkbox = items[i].querySelector(".toggle"); // fetches the "done button" for each li element
    if (checkbox.checked) {
      items[i].remove();
    }
  }
  updateNumberOfActiveNotes();
  hideClearCompletedButton();
});


//checks or unchecks all notes
document.getElementById("toggle-all").onclick = function (){
  let notes = document.getElementsByClassName("toggle");
  for (let i = 0; i < notes.length; i++) {
    notes[i].checked = this.checked;
  }
  updateNumberOfActiveNotes();
  hideClearCompletedButton();
};
