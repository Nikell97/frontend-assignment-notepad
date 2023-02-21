let noteList = document.querySelector('.note-list');
let noteDeleteButton = document.getElementsByClassName("delete");

let input = null;

let noteListItems = null;
let noteListDoneItems = null;
let noteListNotDoneItems = null;

function search(ele) {
    if(event.key === 'Enter') {
        input = ele.value;
        printItem();
    }
}

function printItem() {
    let noteListItem = document.createElement('li')
    let noteListDoneButton = document.createElement('input');
    let noteListText = document.createElement('lable');
    let noteListDeleteButton = document.createElement('span');

    noteListDoneButton.className = "toggle";
    noteListDoneButton.type = "checkbox";

    noteListText.textContent = " " + input + " ";

    noteListDeleteButton.className = "delete"
    noteListDeleteButton.addEventListener("click", function() {
        noteListItem.remove()
    })
    noteListDeleteButton.innerHTML = "❌"

    noteList.append(noteListItem)
    noteListItem.append(noteListDoneButton);
    noteListItem.append(noteListText);
    noteListItem.append(noteListDeleteButton);
}
