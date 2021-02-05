'use strict';

let buttonHamburger = document.querySelector('.button-hamburger');
let buttonClose = document.querySelector('.button-close');
let mainHeaderNav = document.querySelector('.main-header__nav');
let mainHeaderMenu = document.querySelector('.main-header__menu');

// OPEN MENU
buttonHamburger.addEventListener('click', (event) => {
	event.preventDefault();

	buttonHamburger.style.display = 'none';
	buttonClose.style.display = 'block';
	mainHeaderNav.style.backgroundColor = 'transparent';
	mainHeaderMenu.style.display = 'block';
});

// CLOSE MENU
buttonClose.addEventListener('click', (event) => {
	event.preventDefault();

	buttonHamburger.style.display = 'block';
	buttonClose.style.display = 'none';
	mainHeaderNav.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	mainHeaderMenu.style.display = 'none';
});
