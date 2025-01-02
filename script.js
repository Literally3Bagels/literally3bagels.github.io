const themeChangeButton = document.getElementById('theme-change-button');
const mainImage = document.getElementById('main-img');

const script = [];

let themeCount;
let themeIndex = 1;

fetch('themes.json').then(r => r.json())
    .then(data => {
        for (const theme of data) {
            script.push(theme);
        }
        themeCount = script.length;
    });

function setStyleProperty(name, value) {
    document.documentElement.style.setProperty(`--${name}`, value);
}

function applyTheme(theme) {
    setStyleProperty('black', theme.black);
    setStyleProperty('accent', theme.accent);
    setStyleProperty('link', theme.link);
    setStyleProperty('bg', theme.bg);
    mainImage.src = theme.mainImg;
}

themeChangeButton.addEventListener('click', () => {
    applyTheme(script[themeIndex]);
    themeIndex++;
    if (themeIndex === themeCount) {
        themeIndex = 0;
    }
});