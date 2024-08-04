document.querySelectorAll('.nav-item > a').forEach(item => {
    item.addEventListener('click', function(event) {
        const subMenu = this.nextElementSibling;
        if (subMenu && subMenu.classList.contains('sub-menu')) {
            event.preventDefault();
            subMenu.classList.toggle('show');
        }
    });
});

window.addEventListener('click', function(event) {
    if (!event.target.matches('.nav-item > a')) {
        document.querySelectorAll('.sub-menu').forEach(menu => {
            menu.classList.remove('show');
        });
    }
});
