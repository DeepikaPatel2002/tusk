
const listItems = document.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i++){
    listItems[i].style.fontStyle = 'italic';
}
listItems[4].style.color = 'red';
