function openTab(evt, tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    const links = document.querySelectorAll('.tab-link');
    links.forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// Initialize the first tab as active
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tab-link').click();
});
