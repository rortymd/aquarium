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
import 'Sections/Footer/Footer.scss';

const bodyContainer = document.body;

HeaderSection();

window.addEventListener('DOMContentLoaded', () => {
    hideLoadingPlaceholder();
    lazyLoadImages();
});
