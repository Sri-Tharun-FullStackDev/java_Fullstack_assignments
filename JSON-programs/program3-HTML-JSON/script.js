const jsonData = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
};

const output = document.getElementById('json-output');
output.textContent = JSON.stringify(jsonData, null, 2);
