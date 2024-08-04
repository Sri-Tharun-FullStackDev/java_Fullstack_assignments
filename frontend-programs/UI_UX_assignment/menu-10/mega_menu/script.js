document.querySelectorAll('.nav-item > a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const megaMenuContent = this.nextElementSibling;
        if (megaMenuContent && megaMenuContent.classList.contains('mega-menu-content')) {
            megaMenuContent.classList.toggle('show');
        }
    });
});

window.addEventListener('click', function(event) {
    if (!event.target.matches('.nav-item > a')) {
        document.querySelectorAll('.mega-menu-content').forEach(menu => {
            menu.classList.remove('show');
        });
    }
});
