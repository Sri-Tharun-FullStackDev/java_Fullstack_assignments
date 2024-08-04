document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const isActive = content.style.display === 'block';

        // Close all contents
        document.querySelectorAll('.accordion-content').forEach(item => {
            item.style.display = 'none';
        });

        // Toggle the clicked content
        if (!isActive) {
            content.style.display = 'block';
        }
    });
});
