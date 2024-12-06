function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString();
  document.getElementById('clock').textContent = `${time}\n${date}`;
}

setInterval(updateClock, 1000);
updateClock();

// Theme Switcher
const themeSwitch = document.getElementById('themeSwitch');
const html = document.documentElement;

themeSwitch.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light': 'dark';

  html.setAttribute('data-theme', newTheme);
  themeSwitch.textContent = newTheme === 'dark' ? '🌙': '☀️';

  localStorage.setItem('theme', newTheme);
});

const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
themeSwitch.textContent = savedTheme === 'dark' ? '🌙': '☀️';