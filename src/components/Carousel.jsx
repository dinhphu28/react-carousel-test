import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
// import PropTypes from 'prop-types';

// Carousel.propTypes = {
    
// };
import image1 from "./../assets/Eo0KglsVoAE7Nvt.jpeg";
import image2 from "./../assets/0073WLvOgy1gqasjic0d1j31hc0u0gvy.jpg";
import image3 from "./../assets/0073WLvOgy1gqat7pctm9j31hc0u0gry.jpg"
import image4 from "./../assets/0073WLvOgy1gqat7phxw6j31hc0u0gtq.jpg";
import image5 from "./../assets/277108087_511641913663354_6961498726571321684_n.jpg";
import image6 from "./../assets/277559200_511641593663386_5499393811469496335_n.jpg";

const slides = [image1, image2, image3, image4, image5, image6];

function Carousel(props) {
    return (
        <Swiper
            loop
            spaceBetween={10}
            slidesPerView={3}
        >
            {slides.map((slide) => (
                <SwiperSlide>
                    <img src={slide} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Carousel;