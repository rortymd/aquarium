import './Prices.scss';

const PricesSection = () => {
    /* smooth appearing on the screen */
    const pricesItems = document.querySelectorAll('.prices__item');

    const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('prices__item--show');
                observer.unobserve(entry.target);
            }
        });
    };

    const observerOptions = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    pricesItems.forEach((item) => {
        observer.observe(item);
    });
};

export { PricesSection };
