const asciiArt = [
    `
                                        /\\
                                       /  \\
                                      /____\\
                                     /\\    /\\
                                    /  \\  /  \\
                                   /____\\/____\\
                                  /\\    ||    /\\
                                 /  \\   ||   /  \\
                                /____\\  ||  /____\\
                                \\    / _||_ \\    /
                                 \\  / /\\  /\\ \\  /
                                  \\/ /  \\/  \\ \\/
                                  / /  (  )  \\ \\
                                 / /  ( \\/ )  \\ \\
                                |  | |  \\/  | |  |
                                |  | | /\\ / | |  |
                                |  | |/ \\/ \\| |  |
                                |__|_||    ||_|__|
                                   | ||____|| |
                                   |________|
    `,
    `
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
    `,
    `
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
                            |  |  |___|___|  |  |
                             \\  \\  \\     /  /  /
                              \\  \\  \\___/  /  /
                               \\  \\       /  /
                                \\  \\_____/  /
                                 \\__________/
    `
];

let currentArtIndex = 0;

function changeAsciiArt() {
    const asciiArtElement = document.getElementById('ascii-art');
    currentArtIndex = (currentArtIndex + 1) % asciiArt.length;
    asciiArtElement.textContent = asciiArt[currentArtIndex];
}

// Debounce function to limit the rate of ASCII art changes
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
    asciiArtElement.textContent = asciiArt[currentArtIndex];

    document.addEventListener('mousemove', debouncedChangeAsciiArt);
});
