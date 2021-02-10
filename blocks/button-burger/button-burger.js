export const toggleBurger = () => {
	let btnBurger = document.querySelector('.button-burger');
	let btnBurgerIconBurger = document.querySelector('.button-burger__icon-burger');
	let btnBurgerIconCross = document.querySelector('.button-burger__icon-cross');
	let mainHeaderNav = document.querySelector('.main-header__nav');
	let mainHeaderMenu = document.querySelector('.main-header__menu');

	btnBurger.addEventListener('click', () => {
		btnBurgerIconBurger.classList.toggle('js-btn-burger__icon--hide');
		btnBurgerIconCross.classList.toggle('js-btn-burger__cross--show');
		mainHeaderNav.classList.toggle('js-main-header__nav--bg');
		mainHeaderMenu.classList.toggle('js-main-header__menu--show');
	});
};

toggleBurger();
