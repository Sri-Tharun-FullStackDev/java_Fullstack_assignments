document.getElementById('menuIcon').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    // Toggle visibility of the menu
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});
