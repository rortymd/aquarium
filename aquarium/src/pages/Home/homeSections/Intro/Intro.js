import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import './Intro.scss';

const IntroSection = () => {
    const playVideoBtn = document.querySelector('.intro__play-btn');
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
