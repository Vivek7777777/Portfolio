const menuButton = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const yearNode = document.getElementById('year');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (menuButton && navList) {
  menuButton.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}
