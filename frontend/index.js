const artworks = [
    {
        art: `
                   /\\                 /\\
                  /  \\               /  \\
                 /____\\             /____\\
                /\\    /\\           /\\    /\\
               /  \\  /  \\         /  \\  /  \\
              /____\\/____\\       /____\\/____\\
             /\\    ||    /\\     /\\    ||    /\\
            /  \\   ||   /  \\   /  \\   ||   /  \\
           /____\\  ||  /____\\ /____\\  ||  /____\\
           \\    / _||_ \\    / \\    / _||_ \\    /
            \\  / /\\  /\\ \\  /   \\  / /\\  /\\ \\  /
             \\/ /  \\/  \\ \\/     \\/ /  \\/  \\ \\/
             / /  (  )  \\ \\     / /  (  )  \\ \\
            / /  ( \\/ )  \\ \\   / /  ( \\/ )  \\ \\
           |  | |  \\/  | |  | |  | |  \\/  | |  |
           |  | | /\\ / | |  | |  | | /\\ / | |  |
           |  | |/ \\/ \\| |  | |  | |/ \\/ \\| |  |
           |__|_||    ||_|_| |__|_||    ||_|__|
              | ||____|| |     | ||____|| |
              |________|       |________|
        `,
        title: "Saint Nicholas Cathedral",
        description: "A detailed ASCII representation of Saint Nicholas Cathedral, showcasing its iconic domes and intricate architecture."
    },
    {
        art: `
                 _____/\\\\\\\\_____
                /\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
               /\\\\\\/////////\\\\\\\\\\
              /\\\\\\/       \\/\\\\\\\\\\
             /\\\\\\_______/\\\\\\\\\\\\\\
            /\\\\\\///////////\\\\\\\\\\
           \\//\\\\\\      /\\\\\\\\\\\\\\\\\\
            \\///\\\\\\\\\\\\\\\\\\///////
              \\///////\\\\\\///\\\\\\\\\\
               _____/\\\\\\/___\\///\\\\
              /\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_\\/\\\\
             /\\\\\\/////////\\\\\\_\\/\\\\
            \\/\\\\\\       \\/\\\\\\_\\/\\\\
             \\//\\\\\\\\\\\\\\\\\\\\\\\\/\\\\\\\\\\
              \\//////////__\\//////
                   |  |  |
                   |  |  |
              _____|__|__|_____
             |__________________|
        `,
        title: "Saint Basil's Cathedral",
        description: "An intricate ASCII depiction of Saint Basil's Cathedral, highlighting its unique onion domes and colorful architecture."
    },
    {
        art: `
                      ___________
                     /  _______  \\
                    /  /       \\  \\
                   /  /  _____  \\  \\
                  /  /  /     \\  \\  \\
                 |  |  |  ___  |  |  |
                 |  |  | |   | |  |  |
                 |  |  | | O | |  |  |
                 |  |  | |___| |  |  |
                 |  |  |       |  |  |
                 |  |  |  /-\\  |  |  |
                 |  |  | (   ) |  |  |
                 |  |  |  \\_/  |  |  |
                 |  |  |   |   |  |  |
            _____|  |  |___|___|  |  |_____
           |     \\  \\  \\     /  /  /     |
           |      \\  \\  \\___/  /  /      |
           |       \\  \\       /  /       |
           |        \\  \\_____/  /        |
           |_________\\__________/_________|
        `,
        title: "Orthodox Chalice",
        description: "A detailed ASCII representation of an Orthodox Chalice, symbolizing the Eucharist and the central role it plays in Orthodox liturgy."
    }
];

let currentArtIndex = 0;

function changeAsciiArt() {
    const asciiArtElement = document.getElementById('ascii-art');
    const artTitleElement = document.getElementById('art-title');
    const artDescriptionElement = document.getElementById('art-description');

    currentArtIndex = (currentArtIndex + 1) % artworks.length;
    const currentArtwork = artworks[currentArtIndex];

    asciiArtElement.textContent = currentArtwork.art;
    artTitleElement.textContent = currentArtwork.title;
    artDescriptionElement.textContent = currentArtwork.description;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedChangeAsciiArt = debounce(changeAsciiArt, 200);

document.addEventListener('DOMContentLoaded', () => {
    const asciiArtElement = document.getElementById('ascii-art');
    const artTitleElement = document.getElementById('art-title');
    const artDescriptionElement = document.getElementById('art-description');

    const currentArtwork = artworks[currentArtIndex];
    asciiArtElement.textContent = currentArtwork.art;
    artTitleElement.textContent = currentArtwork.title;
    artDescriptionElement.textContent = currentArtwork.description;

    document.addEventListener('mousemove', debouncedChangeAsciiArt);

    // Add zoom functionality
    let scale = 1;
    document.addEventListener('wheel', (e) => {
        e.preventDefault();
        scale += e.deltaY * -0.001;
        scale = Math.min(Math.max(0.5, scale), 2);
        asciiArtElement.style.transform = `scale(${scale})`;
    });
});
