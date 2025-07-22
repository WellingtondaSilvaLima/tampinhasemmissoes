const menuBtn = document.getElementById('menu-btn');
const navList = document.getElementById('nav-list');

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('open');
  menuBtn.classList.toggle('open');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.fade-on-scroll').forEach(el => observer.observe(el));