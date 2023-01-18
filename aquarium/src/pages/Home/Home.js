// libraries
import 'core-js/actual';
import 'modern-normalize/modern-normalize.css';
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';
// styles
import 'Src/styles/styles.scss';
import 'Src/fonts/fonts.scss';
// components
import lazyLoadImages from 'Components/lazyLoadImages/lazyLoadImages';
import 'Components/lazyLoadImages/lazyLoadImages.scss';
import hideLoadingPlaceholder from 'Components/loadingPlaceholder/hideLoadingPlaceholder';
import 'Components/stickyImages/stickyImages.scss';
// sections
import { HeaderSection } from 'Sections/Header/Header';
import { IntroSection } from './homeSections/Intro/Intro';
import { GallerySection } from './homeSections/Gallery/Gallery';
import { InhabitantsSection } from './homeSections/Inhabitants/Inhabitants';
import { PricesSection } from './homeSections/Prices/Prices';
import { ServicesSection } from './homeSections/Services/Services';
import { TestimonialsSection } from './homeSections/Testimonials/Testimonials';
import { ContactUsSection } from './homeSections/ContactUs/ContactUs';
import 'Sections/Footer/Footer.scss';
import { AuthorSection } from 'Sections/Author/Author';

HeaderSection();
IntroSection();
GallerySection();
InhabitantsSection();
PricesSection();
ServicesSection();
TestimonialsSection();
ContactUsSection();
AuthorSection();

window.addEventListener('DOMContentLoaded', () => {
    hideLoadingPlaceholder();
    lazyLoadImages();
});

/* use the custom scrollbar but only on desktop devices */
if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    const osInstance = OverlayScrollbars(document.querySelector('.root'), {});
}
