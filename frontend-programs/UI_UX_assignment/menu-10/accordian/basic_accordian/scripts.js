document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        // Toggle the active class on the header
        this.classList.toggle('active');

        // Slide up all contents
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
                item.style.display = 'none';
            }
        });

        // Slide down the current content
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
