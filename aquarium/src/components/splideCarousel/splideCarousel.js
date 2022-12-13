import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide-core.min.css';
// styles
import './splideCarousel.scss';

const splideCarousel = (carouselId, perPage, height = 'auto') => {
    const splide = new Splide(`#${carouselId}`, {
        type: 'loop',
        perPage,
        focus: 'center',
        autoplay: true,
        height,
        gap: '20px',
        flickPower: 200,
        breakpoints: {
            1024: {
                perPage: 3,
            },
            768: {
                perPage: 2.25,
            },
            576: {
                perPage: 1.5,
            },
        },
    });

    splide.mount();
};

export { splideCarousel };
