export const addActiveLink = () => {
	let headerMenu = document.querySelector('.main-menu');
	let menuLinks = document.querySelectorAll('.main-menu__link');
	let currentUrl = window.location.href;

	for (let link of menuLinks) {
		if (link.href === (currentUrl + '#')) {
			link.classList.add('js-current-page');
		}
	}
};

addActiveLink();
