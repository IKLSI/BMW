// Script js permettant d'ouvrir et de fermer le menu de navigation lorsque l'on est sur un écran téléphone

const menu = document.querySelector(' .Menu');
const menuBtn = document.querySelector(" .Menu-Btn");

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu-open');
});