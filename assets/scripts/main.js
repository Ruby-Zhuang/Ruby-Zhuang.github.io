/******************************
 * SHOW NAV MENU
 ******************************/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');

/******************************
 * REMOVE NAV MENU MOBILE
 ******************************/
const navLinks = document.querySelectorAll('.nav__link');

// Toggle Navbar menu when a menu item link is clicked
const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('show');
};

navLinks.forEach((link) => link.addEventListener('click', linkAction));
