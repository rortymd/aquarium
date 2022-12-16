import './modalWindow.scss';

const modalWindow = (modalContent) => {
    const body = document.body;

    // create a new modal window
    let modal = document.createElement('div');
    modal.classList.add('modal-window');
    // add to the new modal window a content
    modal.innerHTML = modalContent;

    // insert the modal window to the document
    body.appendChild(modal);
    body.classList.add('no-scroll');

    // show modal window
    setTimeout(() => {
        modal.classList.add('modal-window--active');
        modal.tabIndex = 0;
        modal.focus();
    }, 10);

    // close the modal window and delete it from the document
    function closeModal() {
        // hide the modal window
        modal.classList.remove('modal-window--active');

        setTimeout(() => {
            body.removeChild(modal);
            body.classList.remove('no-scroll');
        }, 360);
    }

    // close button
    const closeBtn = modal.querySelector('.modal-window-close');

    // click on the close button
    closeBtn.addEventListener('click', closeModal);

    // click outside of the modal window content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // press on the 'esc' button
    modal.addEventListener('keyup', (e) => {
        if (e.code === 'Escape') {
            closeModal();
        }
    });
};

export { modalWindow };
