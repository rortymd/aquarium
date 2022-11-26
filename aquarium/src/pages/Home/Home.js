// libraries
import 'core-js/actual';
// styles
import 'modern-normalize/modern-normalize.css';
import 'Src/styles/styles.scss';
import 'Src/fonts/fonts.scss';
// components
import lazyLoadImages from 'Components/lazyLoadImages/lazyLoadImages';
import 'Components/lazyLoadImages/lazyLoadImages.scss';
import hideLoadingPlaceholder from 'Components/loadingPlaceholder/hideLoadingPlaceholder';
// sections
import { HeaderSection } from 'Sections/Header/Header';
import { IntroSection } from './homeSections/Intro/Intro';
import 'Sections/Footer/Footer.scss';

const bodyContainer = document.body;

HeaderSection();
IntroSection();

window.addEventListener('DOMContentLoaded', () => {
    hideLoadingPlaceholder();
    lazyLoadImages();
});
