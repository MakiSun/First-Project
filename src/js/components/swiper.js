import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev',
  },
});


swiper.on('slideChange', (swiper) => document.querySelector('.slider__num').innerHTML = swiper.activeIndex + 1);




console.log(swiper.activeIndex);
