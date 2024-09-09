import { data } from './data.js';

export function RenderHtml() {
    const pageWrapper = document.querySelector('[data-wrapper]');
    const htmlSliderInner = document.createElement('div');


    htmlSliderInner.className = 'slider__inner';
    htmlSliderInner.setAttribute('data-slider-inner', '');
    pageWrapper.prepend(htmlSliderInner);


    const html = data.map(({ img, title }, index) =>
        `
        <article class="slider" data-slider-box data-box-inde=${index}>
            <h2 class="slider__title">${title}</h2>

            <div class="slider__images-box">
                <img class="slider__img" src="${img}" alt="">
            </div>

        </article>    
         `
    ).join('');



    document.querySelector('[data-slider-inner]').insertAdjacentHTML('beforeend', html);
}