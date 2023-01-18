// styles
import './Author.scss';
// components
import { modalWindow } from 'Components/modalWindow/modalWindow';
import modalWindowContent from './ModalWindowContent.html';

const AuthorSection = () => {
    const authorBtn = document.querySelector('.author__btn');

    function showAuthorInfo() {
        // show the modal window
        modalWindow(modalWindowContent);
    }

    authorBtn.addEventListener('click', showAuthorInfo);
};

export { AuthorSection };
