const menuBtn = document.getElementById('menu-btn');
const navList = document.getElementById('nav-list');

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('open');
  menuBtn.classList.toggle('open');
});