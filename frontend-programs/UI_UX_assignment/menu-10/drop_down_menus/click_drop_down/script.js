document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menu-button');

    menuButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Close all open dropdowns
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                if (dropdown !== event.target.nextElementSibling) {
                    dropdown.style.display = 'none';
                }
            });

            // Toggle the clicked dropdown
            const dropdown = event.target.nextElementSibling;
            if (dropdown) {
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.matches('.menu-button')) {
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        }
    });
});
