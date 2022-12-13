// components
import { splideCarousel } from 'Components/splideCarousel/splideCarousel';
// styles
import './Testimonials.scss';

const TestimonialsSection = () => {
    splideCarousel('testimonials__carousel', 3);
};

export { TestimonialsSection };
