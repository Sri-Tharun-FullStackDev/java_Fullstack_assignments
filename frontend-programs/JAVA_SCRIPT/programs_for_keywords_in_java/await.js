
// The await keyword in JavaScript is used to wait for a Promise to resolve or reject. It can only be used inside an async function. 
async function fetchData() {
    try {
        let response = await fetch('https://www.google.com/');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();

