const orthodoxThemes = [
    {
        art: `
    /\\
   /  \\
  /____\\
 /\\    /\\
/  \\  /  \\
\\   \\/   /
 \\_/\\/\\_/
   /\\
  /  \\
 /____\\
        `,
        title: "Orthodox Cross",
        description: "A simple representation of the Orthodox cross, symbolizing faith and redemption."
    },
    {
        art: `
   _____
  /     \\
 /  / \\  \\
|  | | |  |
|  | | |  |
 \\  \\_/  /
  \\_____/
    | |
    | |
    |_|
        `,
        title: "Orthodox Dome",
        description: "An iconic onion dome, a distinctive feature of Orthodox church architecture."
    },
    {
        art: `
    ____
   /    \\
  / O  O \\
 |   ^^   |
 |  \\__/  |
  \\      /
   \\____/
    `,
        title: "Icon of Christ",
        description: "A simplified representation of an icon of Jesus Christ, central to Orthodox worship."
    },
    {
        art: `
    /\\
   /  \\
  /____\\
 |      |
 | \\  / |
 |  \\/  |
 |      |
 |______|
    `,
        title: "Orthodox Church",
        description: "A basic outline of an Orthodox church building, representing the house of worship."
    },
    {
        art: `
   _   _
  ( \\ / )
   \\ V /
   / . \\
  / / \\ \\
 /_/   \\_\\
    `,
        title: "Orthodox Vestments",
        description: "A simplified depiction of Orthodox clerical vestments, worn during liturgical services."
    },
    // ... More predefined Orthodox-themed ASCII art pieces
];

const artworks = [];

// Generate 200 artworks based on Orthodox themes
for (let i = 0; i < 200; i++) {
    const themeIndex = i % orthodoxThemes.length;
    const theme = orthodoxThemes[themeIndex];
    
    artworks.push({
        art: theme.art,
        title: `${theme.title} - Variation ${Math.floor(i / orthodoxThemes.length) + 1}`,
        description: theme.description
    });
}

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

// Easter Egg
const easterEggSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let easterEggProgress = 0;

function checkEasterEgg(key) {
    if (key === easterEggSequence[easterEggProgress]) {
        easterEggProgress++;
        if (easterEggProgress === easterEggSequence.length) {
            triggerEasterEgg();
            easterEggProgress = 0;
        }
    } else {
        easterEggProgress = 0;
    }
}

function triggerEasterEgg() {
    const asciiArtElement = document.getElementById('ascii-art');
    const artTitleElement = document.getElementById('art-title');
    const artDescriptionElement = document.getElementById('art-description');

    const easterEggArt = `
       _____
      /     \\
     /  ^ ^  \\
    |  (o o)  |
    |  \\___/  |
     \\  ---  /
      \\_____/
    `;

    asciiArtElement.textContent = easterEggArt;
    artTitleElement.textContent = "Easter Egg: Hidden Icon";
    artDescriptionElement.textContent = "You've discovered a secret icon! This represents the joy and mystery of Orthodox faith.";

    setTimeout(() => {
        changeAsciiArt();
    }, 5000);
}

function toggleInvert() {
    document.body.classList.toggle('inverted');
}

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

    // Add navigation buttons
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.addEventListener('click', () => {
        currentArtIndex = (currentArtIndex - 1 + artworks.length) % artworks.length;
        changeAsciiArt();
    });

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', () => {
        currentArtIndex = (currentArtIndex + 1) % artworks.length;
        changeAsciiArt();
    });

    const navigationDiv = document.createElement('div');
    navigationDiv.appendChild(prevButton);
    navigationDiv.appendChild(nextButton);
    document.querySelector('main').appendChild(navigationDiv);

    // Easter Egg key listener
    document.addEventListener('keydown', (e) => {
        checkEasterEgg(e.key);
    });

    // Invert toggle
    const invertToggle = document.getElementById('invert-toggle');
    invertToggle.addEventListener('click', toggleInvert);
});
