const itemsData = [
    { "name": "Apple", "category": "fruit" },
    { "name": "Carrot", "category": "vegetable" },
    { "name": "Banana", "category": "fruit" },
    { "name": "Broccoli", "category": "vegetable" }
];

const listElement = document.getElementById('items-list');
const filterSelect = document.getElementById('category-filter');

function updateList(filter = '') {
    listElement.innerHTML = '';
    const filteredItems = itemsData.filter(item => !filter || item.category === filter);
    filteredItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        listElement.appendChild(li);
    });
}

filterSelect.addEventListener('change', () => {
    updateList(filterSelect.value);
});

updateList();
