export const togglePrice = () => {
	let priceTable = document.querySelector('.price__table');
	let slider = document.querySelector('.slider');
	let sliderItems = document.querySelectorAll('.slider__item');

	for (let i = 0; i < sliderItems.length; i++) {
		sliderItems[i].addEventListener('click', () => {
			// if (i = 1) {
			// 	priceTable.style.transform = 'translateX(0)';
			// }
			if (i < 1) {
				priceTable.classList.add('js-price-table--translate-right');
				sliderItems[i].classList.add('slider__item--checked');
				sliderItems[++i].classList.remove('slider__item--checked');
			}
			if (i > 1) {
				priceTable.classList.add('js-price-table--translate-left');
				sliderItems[i].classList.add('slider__item--checked');
				sliderItems[--i].classList.remove('slider__item--checked');
			}
		});
	}
};

togglePrice();
