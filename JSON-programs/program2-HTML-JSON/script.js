const profilesData = [
    { "name": "John Doe", "avatar": "https://via.placeholder.com/50" },
    { "name": "Jane Smith", "avatar": "https://via.placeholder.com/50" }
];

const profilesContainer = document.getElementById('profiles');

profilesData.forEach(profile => {
    const profileDiv = document.createElement('div');
    profileDiv.className = 'profile';

    const img = document.createElement('img');
    img.src = profile.avatar;
    img.alt = profile.name;

    const h2 = document.createElement('h2');
    h2.textContent = profile.name;

    profileDiv.appendChild(img);
    profileDiv.appendChild(h2);
    profilesContainer.appendChild(profileDiv);
});
