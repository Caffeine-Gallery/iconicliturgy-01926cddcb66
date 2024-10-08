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
            <h3><a href="#" data-id="${artwork.id}" data-type="artwork">${artwork.title}</a></h3>
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
            <h3><a href="#" data-id="${text.id}" data-type="liturgy">${text.title}</a></h3>
            <p>${text.content}</p>
        `;
        textsContainer.appendChild(textElement);
    });
}

async function showDetail(type, id) {
    let item;
    if (type === 'artwork') {
        item = await backend.getArtwork(id);
    } else if (type === 'liturgy') {
        item = await backend.getLiturgyText(id);
    }

    if (item) {
        const modal = document.getElementById('detail-modal');
        const title = document.getElementById('detail-title');
        const text = document.getElementById('detail-text');

        title.textContent = item.title;
        text.textContent = item.detailText;
        modal.style.display = 'block';
    }
}

function closeModal() {
    const modal = document.getElementById('detail-modal');
    modal.style.display = 'none';
}

async function initializeData() {
    await backend.initializeData();
    await loadArtworks();
    await loadLiturgyTexts();
}

window.addEventListener('load', () => {
    initializeData();

    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && e.target.dataset.id) {
            e.preventDefault();
            showDetail(e.target.dataset.type, parseInt(e.target.dataset.id));
        }
    });

    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        const modal = document.getElementById('detail-modal');
        if (e.target === modal) {
            closeModal();
        }
    });
});
