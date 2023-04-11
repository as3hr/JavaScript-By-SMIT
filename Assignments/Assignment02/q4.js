function addItem(text) {
    let newList = document.querySelector('ul');
    let newListItem = document.createElement('li');
    let newText = document.createTextNode(text);
    newListItem.appendChild(newText);
    newList.appendChild(newListItem);
  }
  
addItem('1-This is a new list item!');