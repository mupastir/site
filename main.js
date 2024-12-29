// Theme switcher
const themeSwitch = document.getElementById('theme-switch');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial theme based on system preference
document.documentElement.setAttribute('data-theme', 
  prefersDark.matches ? 'dark' : 'light'
);

themeSwitch.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
});

// Listen for system theme changes
prefersDark.addEventListener('change', (e) => {
  document.documentElement.setAttribute('data-theme', 
    e.matches ? 'dark' : 'light'
  );
});