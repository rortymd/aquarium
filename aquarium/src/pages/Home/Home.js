// libraries
import 'core-js/actual';
import 'modern-normalize/modern-normalize.css';
// styles
import 'Src/styles/styles.scss';
import 'Src/fonts/fonts.scss';
// components
import lazyLoadImages from 'Components/lazyLoadImages/lazyLoadImages';
import 'Components/lazyLoadImages/lazyLoadImages.scss';
import hideLoadingPlaceholder from 'Components/loadingPlaceholder/hideLoadingPlaceholder';
// sections
import { HeaderSection } from 'Sections/Header/Header';
import { IntroSection } from './homeSections/Intro/Intro';
import './homeSections/Gallery/Gallery.scss';
import { InhabitantsSection } from './homeSections/Inhabitants/Inhabitants';
import { PricesSection } from './homeSections/Prices/Prices';
import 'Sections/Footer/Footer.scss';

HeaderSection();
IntroSection();
InhabitantsSection();
PricesSection();

window.addEventListener('DOMContentLoaded', () => {
    hideLoadingPlaceholder();
    lazyLoadImages();
});
