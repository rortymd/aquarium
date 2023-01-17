/* show a user the information, which section is currently in their viewport (highlight the link, which corresponds to it; but the script could be used anywhere. to show a text node, for example) */

const currentSectionInfo = () => {
    // list of sections
    const sectionsList = ['gallery', 'inhabitants', 'prices', 'services', 'testimonials', 'contact'];

    // list of navigation links
    const linksList = document.querySelectorAll('.navigation__link');

    function highlightViewportSectionLink(section) {
        // coordinates of the section
        let coord = section.getBoundingClientRect();

        const addActiveSessionInfo = () => {
            linksList.forEach((link) => {
                const href = link.getAttribute('href');

                if (href === section.className) {
                    link.classList.add('navigation__link--active');
                } else {
                    link.classList.remove('navigation__link--active');
                }
            });
        };

        const removeActiveSessionInfo = () => {
            linksList.forEach((link) => {
                const href = link.getAttribute('href');

                if (href === section.className) {
                    link.classList.remove('navigation__link--active');
                }
            });
        };

        if (coord.top < window.innerHeight / 2.3 && coord.top > 0) {
            addActiveSessionInfo();
        } else if (coord.top > window.innerHeight / 2) {
            removeActiveSessionInfo();
        } else if (coord.bottom > window.innerHeight / 2.3) {
            addActiveSessionInfo();
        } else if (coord.bottom < window.innerHeight / 2 && coord.bottom > 0) {
            removeActiveSessionInfo();
        }
    }

    // root element (could be "window" instead)
    const root = document.querySelector('.root');

    sectionsList.forEach((item) => {
        const section = document.querySelector(`.${item}`);

        highlightViewportSectionLink(section);
        root.addEventListener('scroll', () => {
            highlightViewportSectionLink(section);
        });
    });
};

export { currentSectionInfo };
