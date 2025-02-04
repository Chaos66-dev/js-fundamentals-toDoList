console.log('My code is running');
var list_item_counter = 4;

function addItem() {
    let listWrapper = document.getElementsByClassName("list-wrapper")[0];
    let newItem = document.createElement('div');
    let newInput = document.createElement('input');
    let newSpan = document.createElement('span')

    newItem.classList.add("list-item");
    newInput.setAttribute("type", "checkbox");
    newInput.setAttribute("name", "list" + list_item_counter.toString());
    newInput.setAttribute("id", "list" + list_item_counter.toString());
    newSpan.innerHTML = "Testing"
    list_item_counter++;

    newItem.appendChild(newInput);
    newItem.appendChild(newSpan);
    listWrapper.appendChild(newItem);

};

function removeItem() {
    alert('remove-item clicked');

    let listWrapper = document.getElementsByClassName("list-wrapper")[0];
    let childToRemove = listWrapper.children[0]; // make this a variable
    listWrapper.removeChild(childToRemove);
};

document.getElementById("add-item").addEventListener("click", addItem);
document.getElementById("remove-item").addEventListener("click", removeItem);

