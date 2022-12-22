// libraries
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
// styles
import './Intro.scss';

const IntroSection = () => {
    const intro = document.querySelector('.intro');

    /* smooth appearing on the screen */
    const introTitle = intro.querySelector('.intro__title');
    const introSubtitle = intro.querySelector('.intro__subtitle');
    const introLink = intro.querySelector('.intro__link');

    const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // show the items
                introTitle.style.opacity = '1';
                introTitle.style.transform = 'translate3d(0, 0, 0)';
                introSubtitle.style.opacity = '1';
                introSubtitle.style.transform = 'translate3d(0, 0, 0)';
                introLink.style.opacity = '1';
                introLink.style.transform = 'translate3d(0, 0, 0)';

                observer.unobserve(entry.target);
            }
        });
    };

    const observerOptions = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    observer.observe(intro);

    /* video player */
    const playVideoBtn = intro.querySelector('.intro__play-btn');
    const player = new Plyr('#intro__player');

    function playVideo() {
        player.play();
        player.fullscreen.enter();
    }

    function stopVideo() {
        player.stop();
    }

    playVideoBtn.addEventListener('click', playVideo);
    player.on('exitfullscreen', stopVideo);
};

export { IntroSection };
