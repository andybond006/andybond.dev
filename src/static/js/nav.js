let open = false;

function toggleMenu() {
  document.documentElement.classList.toggle('dark');
  if (available) {
    const current = localStorage.getItem(themeKey);
    localStorage.setItem(themeKey, current === 'dark' ? 'light' : 'dark');
  }
}
