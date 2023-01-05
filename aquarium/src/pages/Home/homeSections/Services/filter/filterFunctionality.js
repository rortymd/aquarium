/* toggle the images when a user clicks on it */

const filterFunctionality = (servicesImages, currentImage, textItems) => {
    // clicked image index
    const imageIndex = [...servicesImages].indexOf(currentImage);

    // hide previously active text
    textItems.forEach((item) => {
        if (item.classList.contains('services__text-item--active')) {
            item.classList.remove('services__text-item--active');
        }
    });

    // show a new text item
    textItems[imageIndex].classList.add('services__text-item--active');
};

export { filterFunctionality };
