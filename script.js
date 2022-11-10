const themeButton = document.querySelector('.theme-toggle-btn');
const logoImg = document.getElementById('logo-swapper');
let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
  document.body.classList.add('dark');
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('dark');
  localStorage.removeItem('darkMode');
};

if (darkMode === 'enabled') {
  enableDarkMode();
  logoImg.src = "resources/images/logo-dark.png";
};

themeButton.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
    logoImg.src = "resources/images/logo-dark.png";
  } else {
    disableDarkMode();
    logoImg.src = "resources/images/logo-light.png";
  }
});