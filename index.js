console.log('My code is running');
var list_item_counter = 4;

function addItem() {
    let listWrapper = document.getElementsByClassName("list-wrapper")[0];
    let newItem = document.createElement('div');
    let newInput = document.createElement('input');
    // let newSpan = document.createElement('span');
    let newTextBox = document.createElement('input');

    newItem.classList.add("list-item");
    newInput.setAttribute("type", "checkbox");
    newInput.setAttribute("name", "list" + list_item_counter.toString());
    newInput.setAttribute("id", "list" + list_item_counter.toString());
    // newSpan.innerHTML = "Testing"

    newTextBox.setAttribute("type", "text");
    newTextBox.setAttribute("id", "userInput");
    newTextBox.setAttribute("placeholder", "Add item to list here");
    newTextBox.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addEnterHandler(event);
        }
    });
    list_item_counter++;

    newItem.appendChild(newInput);
    // newItem.appendChild(newSpan);
    newItem.appendChild(newTextBox);
    listWrapper.appendChild(newItem);

};

function addEnterHandler(event) {
    console.log("i made it here");
    let listItems = document.getElementsByClassName('list-item');
    let lastListItem = listItems[listItems.length - 1];
    let childToRemove = lastListItem.children[1];
    let newChild = document.createElement('span');

    lastListItem.removeChild(childToRemove)
    newChild.innerHTML = event.target.value;

    lastListItem.appendChild(newChild);
};

function removeItem() {
    let newTextBox = document.createElement('input');
    let menuWrapper = document.getElementById('menu-wrapper');


    newTextBox.setAttribute("type", "number");
    newTextBox.setAttribute("id", "remove-item-textbox");
    newTextBox.setAttribute("placeholder", "Index...");
    newTextBox.addEventListener("keydown", function(event) {
        if (event.key === 'Enter') {
            removeEnterHandler(event);
        }
    })

    menuWrapper.appendChild(newTextBox);
};

function removeEnterHandler(event) {
    let menuWrapper = document.getElementById('menu-wrapper');
    let removeTextBox = document.getElementById("remove-item-textbox");
    let listWrapper = document.getElementsByClassName('list-wrapper')[0];

    if (event.target.value < 1) {
        alert('Please enter a value greater than 1');
    }
    else if (event.target.value > listWrapper.children.length) {
        alert('Input out of range');
    }
    else {
        let removeListItem = listWrapper.children[event.target.value - 1];
        menuWrapper.removeChild(removeTextBox);
        listWrapper.removeChild(removeListItem);
    }

}

document.getElementById("add-item").addEventListener("click", addItem);
document.getElementById("remove-item").addEventListener("click", removeItem);

