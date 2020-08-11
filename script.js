const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const DARK_THEME = 'Dark';
const LIGHT_THEME = 'Light';

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
    toggleIcon.children[0].textContent = `${color} Mode`;
}

function toggleMode(theme) {
    if (theme === DARK_THEME) {
        nav.style.backgroundColor = 'rgb(0 0 0 /50%)';
        textBox.style.backgroundColor = 'rgb(255 255 255/50%)';
    } else {
        nav.style.backgroundColor = 'rgb(255 255 255/50%)';
        textBox.style.backgroundColor = 'rgb(0 0 0 /50%)';
    }
    theme === DARK_THEME
        ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
        : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    theme === DARK_THEME ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
}

// Switch Theme
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleMode(DARK_THEME);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleMode(LIGHT_THEME);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleMode(DARK_THEME);
    }
}
