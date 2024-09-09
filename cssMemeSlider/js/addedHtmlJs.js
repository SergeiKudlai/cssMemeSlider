import { data } from './data.js';

export function setRenderHtml() {
    const pageWrapper = document.querySelector('[data-wrapper]');
    const htmlSliderInner = document.createElement('div');
    const htmlSlider = document.createElement('div');


    htmlSlider.className = 'slider';
    pageWrapper.prepend(htmlSlider);
    htmlSlider.setAttribute('data-slider', '');

    htmlSliderInner.className = 'slider__inner';
    htmlSliderInner.setAttribute('data-slider-inner', '');
    document.querySelector('[data-slider]').prepend(htmlSliderInner);


    const html = data.map(({ img, title }) =>
        `
        <article class="slider__box" data-slider-box>
            <h2 class="slider__title">${title}</h2>

            <div class="slider__images-box">
                <img class="slider__img" src="${img}" alt="">
            </div>

        </article>    
         `
    ).join('');

    const htmlDots = `
        <div class="slider__dots">
            ${data.map((_, index) =>
        `
            <button class="slider__dots-element" type="button" data-dots-index=${index}></button>
        `
    ).join('')}
        </div>
    `



    document.querySelector('[data-slider-inner]').insertAdjacentHTML('beforeend', html);
    document.querySelector('[data-slider]').insertAdjacentHTML('beforeend', htmlDots);
}