// libraries
import './hamburger.scss';
import animateScrollTo from 'animated-scroll-to';
import { osInstance } from '../../pages/Home/Home';
// components
import { currentSectionInfo } from './currentSectionInfo';
// styles
import './Header.scss';

const HeaderSection = () => {
    const header = document.querySelector('.header');
    // burger button
    const navBtn = header.querySelector('.header__nav-btn');
    // <ul> list of links
    const navList = header.querySelector('.header__links-list');
    // <a> nav links
    const navLinks = header.querySelectorAll('.header__nav-link');

    /* hide/show the navigation menu on the small screens */
    // navigation menu status
    let isNavActive = false;

    // page viewport
    let viewport;

    if (osInstance) {
        // in case the custom scrollbar is used
        viewport = document.querySelector('.os-viewport');
    } else {
        viewport = document.querySelector('.root');
    }

    function showNav() {
        isNavActive = true;

        navBtn.classList.add('is-active');
        navList.classList.add('header__links-list--active');
        viewport.classList.add('no-scroll');

        // allow keyboard navigation
        navLinks.forEach((link) => {
            link.tabIndex = 0;
        });
    }

    function hideNav() {
        isNavActive = false;

        navBtn.classList.remove('is-active');
        navList.classList.remove('header__links-list--active');
        viewport.classList.remove('no-scroll');

        // prevent keyboard navigation
        navLinks.forEach((link) => {
            link.tabIndex = -1;
        });
    }

    // toggle the navigation menu on the burger button click
    navBtn.addEventListener('click', () => {
        if (isNavActive) {
            hideNav();
        } else if (!isNavActive) {
            showNav();
        }
    });

    /* prevent keyboard navigation if the navigation menu is hidden (small screens);
       hide the navigation menu, if screen size has been changed */
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

            // hide the navigation menu
            if (isNavActive) {
                hideNav();
            }
        }
    }

    toggleTabindex();
    window.addEventListener('resize', toggleTabindex);

    /* animate moving to a section */
    const anchorsLinks = document.querySelectorAll('.navigation__link');

    anchorsLinks.forEach((link) => {
        link.onclick = (event) => {
            event.preventDefault();

            const elemRect = document.querySelector(`.${link.getAttribute('href')}`).getBoundingClientRect();

            const elOffset = viewport.scrollTop + elemRect.top - header.clientHeight;

            animateScrollTo(elOffset, {
                cancelOnUserAction: false,
                elementToScroll: viewport,
            });

            // hide menu if opened
            if (isNavActive) {
                hideNav();
            }
        };
    });

    /* header styles during scrolling */
    function headerScroll() {
        if (viewport.scrollTop >= 400) {
            header.classList.add('header--scroll');
        } else {
            header.classList.remove('header--scroll');
        }
    }

    headerScroll();
    viewport.addEventListener('scroll', headerScroll);

    /* show a user the information, which section is currently in their viewport */
    currentSectionInfo();
};

export { HeaderSection };
