// components
import { splideCarousel } from 'Components/splideCarousel/splideCarousel';
// styles
import './Inhabitants.scss';

const InhabitantsSection = () => {
    splideCarousel('inhabitants__carousel', 5, '400px');
};

export { InhabitantsSection };
