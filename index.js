const hamburgerMenu = document.querySelector('.js-ham-menu');
const navContainer = document.querySelector('.js-nav-container');

hamburgerMenu.addEventListener('click', () => {
  navContainer.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
});

// ANIMATION
const sphere = document.getElementById('sphere');
const rows = []
for (let i = 0; i < 180; i += 7) {
   rows.push(`<div class ="line" style= "transform: rotateY(${i}deg);"></div>`);
}

sphere.innerHTML = rows.join("");
