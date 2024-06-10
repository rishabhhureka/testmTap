import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import EventImage from '../Img/eventImage.jpg';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={EventImage} alt="Image 1" />
        <p className="legend">Image 1</p>
      </div>
      <div>
        <img src={EventImage} alt="Image 2" />
        <p className="legend">Image 2</p>
      </div>
      <div>
        <img src={EventImage} alt="Image 3" />
        <p className="legend">Image 3</p>
      </div>
    </Slider>
  );
};

export default ImageCarousel;