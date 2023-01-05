import { filterFunctionality } from './filterFunctionality';
import { filterObserver } from './filterObserver';

const filterAnimation = () => {
    // section parent node
    const services = document.querySelector('.services');
    // all section images
    const servicesImages = services.querySelectorAll('.services__image');
    // wrapper for the active image
    const activeImgWrapper = services.querySelector('.services__active-pic');
    // all filter text items
    const textItems = services.querySelectorAll('.services__text-item');

    // animation play status
    let animPlays = false;

    // images transition time (in ms)
    const transitionTime = 750;

    // set sizes for all the images and their parent nodes
    function setSizes(image, parent) {
        setTimeout(() => {
            image.style.width = `${parent.clientWidth}px`;
            image.style.top = `${parent.offsetTop}px`;
            image.style.left = `${parent.offsetLeft}px`;

            setTimeout(() => {
                parent.style.height = `${image.clientHeight}px`;
            }, transitionTime);
        }, 10);
    }

    // position items during the first render and after screen resize
    function positionImages() {
        servicesImages.forEach((image) => {
            setSizes(image, image.parentNode);

            // fix layout bugs if there are any
            setTimeout(() => {
                setSizes(image, image.parentNode);
            }, 1000);
        });
    }

    positionImages();
    window.addEventListener('resize', positionImages);

    // add the onclick function and tabIndex for the images
    servicesImages.forEach((image) => {
        if (image.parentNode !== activeImgWrapper) {
            image.addEventListener('click', () => {
                toggleItems(image);
            });

            image.addEventListener('keypress', (event) => {
                if (event.code === 'Space') {
                    toggleItems(image);
                }
            });

            image.tabIndex = 0;
        }
    });

    /* show correspondive to the active item information */
    filterFunctionality(servicesImages, activeImgWrapper.querySelector('.services__image'), textItems);

    /* show the section when a user scrolls down to it */
    filterObserver(services, activeImgWrapper);

    // toggle the filter items
    function toggleItems(item) {
        if (!animPlays && item.parentNode !== activeImgWrapper) {
            // prevent clicking while the animation is playing
            animPlays = true;

            // parent node of the clicked filter item
            const itemParent = item.parentNode;
            // currently active image
            const activeImage = activeImgWrapper.querySelector('.services__image');

            // set transition for smooth position changing
            item.style.transitionDuration = `${transitionTime}ms`;
            activeImage.style.transitionDuration = `${transitionTime}ms`;
            item.style.transitionProperty = 'top, left, width';
            activeImage.style.transitionProperty = 'top, left, width';

            // set sizes and change position of the clicked item and the active image
            setSizes(item, activeImgWrapper);
            setSizes(activeImage, itemParent);

            // set border radius for the new active image

            // append the previously active image and the clicked item to their new parent nodes
            activeImgWrapper.appendChild(item);
            itemParent.appendChild(activeImage);

            // add the onclick function for the previously active image
            activeImage.addEventListener('click', () => {
                toggleItems(activeImage);
            });
            activeImage.addEventListener('keypress', (event) => {
                if (event.code === 'Space') {
                    toggleItems(activeImage);
                }
            });

            // remove tabIndex from the new active image
            item.tabIndex = -1;
            activeImage.tabIndex = 0;

            // show correspondive to the clicked item information
            filterFunctionality(servicesImages, item, textItems);

            // change the inactive images position to fit the text block
            servicesImages.forEach((image) => {
                if (image !== item && image !== activeImage) {
                    image.style.transition = '0.25s ease-out';

                    setSizes(image, image.parentNode);

                    setTimeout(() => {
                        image.style.transition = '';
                    }, 250);
                }
            });

            // function when the animation ends
            setTimeout(() => {
                // remove 'transition' for a normal position changing during resize
                item.style.transitionDuration = `250ms`;
                activeImage.style.transitionDuration = `250ms`;
                item.style.transitionProperty = 'box-shadow, transform';
                activeImage.style.transitionProperty = 'box-shadow, transform';

                // let user click on the filter items again
                animPlays = false;
            }, transitionTime);
        }
    }
};

export { filterAnimation };
