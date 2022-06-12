const light = document.querySelector("#light");
const dark = document.querySelector("#dark");
const solar = document.querySelector("#solar");
const body = document.body;

const theme = localStorage.getItem('theme');

light.addEventListener('click', lightTheme);

if (theme) {
    body.classList.add(theme);
  }

function lightTheme () {
    body.classList.remove("dark", "solar");
    body.classList.add("light");
    localStorage.setItem('theme', 'light');
};

dark.addEventListener('click', darkTheme);

function darkTheme () {
    body.classList.remove("light", "solar");
    body.classList.add("dark");
    localStorage.setItem('theme', 'dark');
};

solar.addEventListener('click', solarTheme);

function solarTheme () {
    body.classList.remove("light", "dark");
    body.classList.add("solar");
    localStorage.setItem('theme', 'solar');
};