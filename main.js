const menuButton = document.querySelector('.submenu-open');
const menu = document.querySelector('.sub-menu');
const onMenuToggleClick = () => {
  menuButton.classList.toggle('is-active');
  menu.classList.toggle('is-active');
}
menuButton.addEventListener('click', onMenuToggleClick);
