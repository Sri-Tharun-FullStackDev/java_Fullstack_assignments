const jsonData = [
    { "name": "Apple" },
    { "name": "Banana" },
    { "name": "Cherry" }
];

const listElement = document.getElementById('items-list');

jsonData.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name;
    listElement.appendChild(li);
});
