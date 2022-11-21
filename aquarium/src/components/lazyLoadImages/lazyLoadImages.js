const lazyLoadImages = () => {
    const lazyloadImages = document.querySelectorAll('.lazy-image');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    const dataSrc = image.getAttribute('data-src');
                    import(/* webpackMode: "eager" */ `Src/images/lazyload/${dataSrc}`).then((src) => {
                        image.setAttribute('src', src.default);
                        image.addEventListener('load', () => {
                            image.parentNode.classList.add('image-loaded');
                        });
                    });
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyloadImages.forEach((image) => {
            imageObserver.observe(image);
        });
    } else {
        /* in case IntersectionObserver is not supported */
        let lazyloadThrottleTimeout;

        const loadImages = () => {
            if (lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout);
            }

            lazyloadThrottleTimeout = setTimeout(() => {
                let scrollTop = window.pageYOffset;

                lazyloadImages.forEach((img) => {
                    if (img.offsetTop < window.innerHeight + scrollTop) {
                        const dataSrc = img.getAttribute('data-src');
                        import(/* webpackMode: "lazy" */ `Src/images/lazyload${dataSrc}`).then((src) => {
                            img.setAttribute('src', src.default);
                        });
                    }
                });

                if (lazyloadImages.length == 0) {
                    document.removeEventListener('scroll', loadImages);
                    window.removeEventListener('resize', loadImages);
                    window.removeEventListener('orientationChange', loadImages);
                }
            }, 20);
        };

        document.addEventListener('scroll', loadImages);
        window.addEventListener('resize', loadImages);
        window.addEventListener('orientationChange', loadImages);
    }
};

export default lazyLoadImages;
