import 'hamburgers/dist/hamburgers.min.css';
import './Header.scss';

const HeaderSection = () => {
    const header = document.querySelector('.header');
    // burger button
    const navBtn = header.querySelector('.header__nav-btn');
    // <ul> list of links
    const navList = header.querySelector('.header__links-list');
    // <a> nav links
    const navLinks = header.querySelectorAll('.header__nav-link');

    let isNavActive = false;

    function showNav() {
        isNavActive = true;
        navBtn.classList.add('is-active');
        navList.classList.add('header__links-list--active');
        // allow keyboard navigation
        navLinks.forEach((link) => {
            link.tabIndex = 0;
        });
    }

    function hideNav() {
        isNavActive = false;
        navBtn.classList.remove('is-active');
        navList.classList.remove('header__links-list--active');
        // prevent keyboard navigation
        navLinks.forEach((link) => {
            link.tabIndex = -1;
        });
    }

    navBtn.addEventListener('click', () => {
        if (isNavActive) {
            hideNav();
        } else if (!isNavActive) {
            showNav();
        }
    });

    // prevent keyboard navigation if the navigation menu is hidden
    function toggleTabindex() {
        if (window.innerWidth <= 1024) {
            if (isNavActive) {
                navLinks.forEach((link) => {
                    link.tabIndex = 0;
                });
            } else if (!isNavActive) {
                navLinks.forEach((link) => {
                    link.tabIndex = -1;
                });
            }
        } else {
            navLinks.forEach((link) => {
                link.tabIndex = 0;
            });
        }
    }

    toggleTabindex();
    window.addEventListener('resize', toggleTabindex);
};

export { HeaderSection };
