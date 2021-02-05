'use strict';

let buttonHamburger = document.querySelector('.button-hamburger');
let buttonClose = document.querySelector('.button-close');
let mainHeaderNav = document.querySelector('.main-header__nav');
let mainHeaderMenu = document.querySelector('.main-header__menu');

// OPEN MENU
buttonHamburger.addEventListener('click', (event) => {
	event.preventDefault();

	buttonHamburger.classList.add('js-button-hamburger--closed');
	buttonClose.classList.add('js-button-close--opened');
	mainHeaderNav.classList.add('js-main-header__nav--opened');
	mainHeaderMenu.classList.add('js-main-header__menu--opened');
});

// CLOSE MENU
buttonClose.addEventListener('click', (event) => {
	event.preventDefault();

	buttonHamburger.classList.remove('js-button-hamburger--closed');
	buttonClose.classList.remove('js-button-close--opened');
	mainHeaderNav.classList.remove('js-main-header__nav--opened');
	mainHeaderMenu.classList.remove('js-main-header__menu--opened');
});
