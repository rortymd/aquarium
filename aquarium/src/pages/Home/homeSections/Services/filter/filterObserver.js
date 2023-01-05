/* show the section when a user scrolls down to it */

const filterObserver = (services, activeImgWrapper) => {
    const filterImagesWrapper = services.querySelector('.services__items');
    const textWrapper = services.querySelector('.services__text');

    /* smooth appearing on the screen */
    const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // show active image section
                setTimeout(() => {
                    activeImgWrapper.style.opacity = 1;
                }, 500);

                // show text and filter images sections
                setTimeout(() => {
                    filterImagesWrapper.style.opacity = 1;
                    textWrapper.style.opacity = 1;
                }, 1000);

                observer.unobserve(entry.target);
            }
        });
    };

    const observerOptions = {
        threshold: 0.25,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    observer.observe(services);
};

export { filterObserver };
