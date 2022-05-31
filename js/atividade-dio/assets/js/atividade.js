function changeName() {
    changeClass();
    changeText();

}



function changeClass() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
}

function changeText() {
    const darkMode = 'Dark Mode';
    const ligthMode = 'Ligth Mode';

    if (body.classList.contains(darkModeClass)) {
        button.innerHTML = ligthMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = ligthMode + " ON";

}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById("page-title");
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];


button.addEventListener('click', changeName)