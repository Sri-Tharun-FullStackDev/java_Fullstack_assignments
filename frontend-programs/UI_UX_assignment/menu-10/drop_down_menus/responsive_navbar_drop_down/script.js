document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.menu');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.matches('.navbar-toggle') && !event.target.closest('.menu')) {
            menu.classList.remove('show');
        }
    });

    // Close dropdowns when clicking on a menu item
    document.querySelectorAll('.menu-item > a').forEach(item => {
        item.addEventListener('click', (event) => {
            const dropdown = event.target.nextElementSibling;
            if (dropdown) {
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                event.stopPropagation(); // Prevent closing dropdown when clicking inside
            }
        });
    });
});
