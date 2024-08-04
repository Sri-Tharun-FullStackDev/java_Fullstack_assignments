// script.js

document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            const name = member.getAttribute('data-name');
            const role = member.getAttribute('data-role');
            alert(`Name: ${name}\nRole: ${role}`);
        });
    });
});
