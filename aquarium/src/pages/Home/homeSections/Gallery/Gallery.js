// styles
import './Gallery.scss';

const GallerySection = () => {
    // root element
    const root = document.querySelector('.root');

    // section images wrappers
    const galleryItems = document.querySelectorAll('.gallery__picture-wrapper');

    galleryItems.forEach((item) => {
        // mouse
        item.addEventListener('mouseover', () => {
            item.style.filter = 'brightness(1)';
        });

        item.addEventListener('mousemove', (event) => {
            moveX(event, item);
            moveY(event, item);
        });

        item.addEventListener('mouseleave', () => {
            item.style.filter = 'brightness(0.75)';
        });

        // touchscreen
        // prevent scrolling
        item.addEventListener('touchstart', () => {
            root.classList.add('no-scroll');
            item.style.filter = 'brightness(1)';
        });

        item.addEventListener('touchmove', (event) => {
            moveX(event, item, 'touchscreen');
            moveY(event, item, 'touchscreen');
        });

        // allow scrolling
        item.addEventListener('touchend', () => {
            root.classList.remove('no-scroll');
            item.style.filter = 'brightness(0.75)';
        });

        // prevent showing the contextmenu on mobile devices (annoying as hell)
        item.addEventListener('contextmenu', (event) => {
            event.preventDefault();
        });
    });

    function moveX(event, item, type = 'mouse') {
        // item's coordinates and sizes
        const rect = item.getBoundingClientRect();

        // cursor position
        let x = event.clientX - rect.left;

        // finger position (for touchscreens)
        if (type === 'touchscreen') {
            x = event.touches[0].clientX - rect.left;
        }

        // image to move
        const image = item.querySelector('.lazy-image');

        const ratio = x * (image.getBoundingClientRect().width / rect.width) - rect.width;

        if (x < rect.width) {
            image.style.left = `-${ratio}px`;
        }
    }

    function moveY(event, item, type = 'mouse') {
        // item's coordinates and sizes
        const rect = item.getBoundingClientRect();

        // cursor position
        let y = event.clientY - rect.top;

        // finger position (for touchscreens)
        if (type === 'touchscreen') {
            y = event.touches[0].clientY - rect.top;
        }

        // image to move
        const image = item.querySelector('.lazy-image');

        const ratio = y * (image.getBoundingClientRect().height / rect.height) - rect.height;

        if (y < rect.height) {
            image.style.top = `-${ratio}px`;
        }
    }
};

export { GallerySection };
