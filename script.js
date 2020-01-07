var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list_items = document.getElementsByTagName('li');

// function to check input item lenght
function inputLength() {
    return input.value.length;
}

// function to create a new li element in ul
function createListElement() {
    // declare variables within the function 
    var li = document.createElement("li");
    var deleteButton = document.createElement("button");
    // add list item
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value='';
    // add delete button to list
    deleteButton.className = "deleteButton";
    deleteButton.appendChild(document.createTextNode("delete"));
    li.appendChild(deleteButton);
    // makes the list item to be removed on click
    deleteButton.onclick = removeParent;  
}

// function with event declaration to remove parent node
function removeParent(event){
    event.target.parentNode.remove();
}

// create compiled list elemnt, text + delete button
function createCompleteListItem(){
    if(inputLength()){
        createListElement();
        //createDeleteButton
    }
}

// function to listen to 'enter' key and create a list item
function enterKeyInput(event){
    if(inputLength() > 0 && event.keyCode === 13) {
        createCompleteListItem();
    }
}

// mark list item as done
function toggle(event) {
    var target = event.target;
    target.classList.toggle("done");
}

// EVENT LISTENERS

// listens for user to click on the enter button
enterButton.addEventListener("click",createCompleteListItem);
// listens for user to press enter key on the input field
input.addEventListener("keypress",enterKeyInput);
// listens for user to mark the llist item as done
ul.addEventListener("click",toggle);
