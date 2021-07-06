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

/******************************
 * SCROLL SECTIONS ACTIVE LINK
 ******************************/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionBottom = sectionTop + sectionHeight;

    // console.log('scrollY', scrollY);
    // console.log('sectionTop', sectionTop);
    // console.log('sectionBottom', sectionBottom);

    sectionId = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionBottom) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  });
};

window.addEventListener('scroll', scrollActive);
