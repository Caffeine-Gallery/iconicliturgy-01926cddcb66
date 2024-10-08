import { backend } from 'declarations/backend';

async function loadArtworks() {
    const artworks = await backend.getArtworks();
    const gallery = document.getElementById('artwork-gallery');
    gallery.innerHTML = '';
    artworks.forEach(artwork => {
        const artworkElement = document.createElement('div');
        artworkElement.className = 'artwork-item';
        artworkElement.innerHTML = `
            <img src="${artwork.imageUrl}" alt="${artwork.title}">
            <h3>${artwork.title}</h3>
            <p>Artist: ${artwork.artist}</p>
            <p>${artwork.description}</p>
        `;
        gallery.appendChild(artworkElement);
    });
}

async function loadLiturgyTexts() {
    const liturgyTexts = await backend.getLiturgyTexts();
    const textsContainer = document.getElementById('liturgy-texts');
    textsContainer.innerHTML = '';
    liturgyTexts.forEach(text => {
        const textElement = document.createElement('div');
        textElement.className = 'liturgy-text';
        textElement.innerHTML = `
            <h3>${text.title}</h3>
            <p>${text.content}</p>
        `;
        textsContainer.appendChild(textElement);
    });
}

async function initializeData() {
    await backend.initializeData();
    await loadArtworks();
    await loadLiturgyTexts();
}

window.addEventListener('load', () => {
    initializeData();
});
