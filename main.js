let noteList = document.querySelector(".note-list");
let noteDeleteButton = document.getElementsByClassName("delete");
let form = document.querySelector('form');
let hideButton = document.getElementById('button')

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

    noteListText.textContent = " " + form.input.value + " ";

    noteListDeleteButton.className = "delete"
    noteListDeleteButton.addEventListener("click", function() {
        noteListItem.remove()
    })
    noteListDeleteButton.innerHTML = "❌"

    noteList.append(noteListItem)
    noteListItem.append(noteListDoneButton);
    noteListItem.append(noteListText);
    noteListItem.append(noteListDeleteButton);
    form.reset();
}

hideButton.addEventListener("click", function() {
  let checkbox = document.getElementsByClassName("toggle");
  console.log(checkbox.checked);
  
  //noteList = document.getElementsByClassName("item");
  
  
  
  /*for (i = 0; i < noteList.length; i++)
  {
    let checkbox = [i].firstChild;
    console.log(checkbox);
    if (checkbox == true)
    {
    
    }
  }*/
});
