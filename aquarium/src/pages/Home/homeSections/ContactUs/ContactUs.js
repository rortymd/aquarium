// styles
import './ContactUs.scss';
// components
import { modalWindow } from 'Components/modalWindow/modalWindow';
import notificationModal from './Notification.html';

const ContactUsSection = () => {
    const form = document.querySelector('.contact__form');

    const nameInput = form.querySelector('#contact__form-name');
    const phoneInput = form.querySelector('#contact__form-phone');
    const textarea = form.querySelector('#contact__form-textarea');

    // phone number validation
    phoneInput.addEventListener('input', () => {
        phoneInput.setCustomValidity('');
        phoneInput.checkValidity();
    });

    phoneInput.addEventListener('invalid', () => {
        if (phoneInput.value === '') {
            phoneInput.setCustomValidity('Please, enter a phone number.');
        } else {
            phoneInput.setCustomValidity('Please, enter a phone number in the appropriate format.');
        }
    });

    // dynamic height for the textarea to fit the inserted content
    function setTextareaHeight() {
        textarea.style.height = '1px';
        textarea.style.height = `${20 + textarea.scrollHeight}px`;
    }

    textarea.addEventListener('keydown', setTextareaHeight);
    textarea.addEventListener('paste', setTextareaHeight);

    // submit the form
    function submitForm(event) {
        event.preventDefault();

        const name = nameInput.value;
        const phone = phoneInput.value;

        // show the modal window
        modalWindow(notificationModal);

        // insert the form data
        const nameWrapper = document.querySelector('#notification-name');
        const phoneWrapper = document.querySelector('#notification-phone');

        nameWrapper.innerText = name;
        phoneWrapper.innerText = phone;

        // clear the form
        nameInput.value = '';
        phoneInput.value = '';
    }

    form.addEventListener('submit', submitForm);
};

export { ContactUsSection };
