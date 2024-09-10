export function setSlidersActive() {
    const slidersDots = document.querySelectorAll('[data-dots-index]');
    const slidersCard = document.querySelectorAll('[data-slider-box]');

    document.querySelectorAll('[data-dots-intro]')[0].classList.add('slider__dots-element--active');


    document.addEventListener('click', (e) => {
        const { target } = e;
        target.dataset.dotsIndex && setSliderIndexActive(target.dataset.dotsIndex);
    })


    const setSliderIndexActive = (i) => {
        slidersCard.forEach((value) => {
            value.style.transform = `translateX(-${i}00%)`;
        })

        setCnotrolDots(i);
    }


    const setCnotrolDots = (index) => {
        slidersDots.forEach((value) => {
            value.classList.remove('slider__dots-element--active');
            if (value.hasAttribute('data-dots-intro') && value.dataset.dotsIndex === index) {
                value.classList.add('slider__dots-element--active');
            }
        })
    }
}