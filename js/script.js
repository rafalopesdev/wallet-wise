const menu = document.querySelector('.menu');
const menuMobile = document.querySelector('.menu-mobile');

function handleClick() {
  menu.classList.toggle('ativo');
}

menuMobile.addEventListener('click', handleClick);
