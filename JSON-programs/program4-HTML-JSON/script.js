const items = [];
const listElement = document.getElementById('items-list');
const inputElement = document.getElementById('new-item');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', () => {
    const itemText = inputElement.value.trim();
    if (itemText) {
        const item = { name: itemText };
        items.push(item);
        updateList();
        inputElement.value = '';
    }
});

function updateList() {
    listElement.innerHTML = '';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.name;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove';
        removeButton.addEventListener('click', () => {
            items.splice(index, 1);
            updateList();
        });
        li.appendChild(removeButton);
        listElement.appendChild(li);
    });
}
