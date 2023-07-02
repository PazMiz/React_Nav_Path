import React, { useState, useEffect } from 'react';

const Carousel = ({ images, interval }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleCarousel = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, interval);

    return () => {
      clearInterval(handleCarousel);
    };
  }, [images, interval]);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  return (
    <div className="carousel">
      <button onClick={handlePrevClick}>Prev</button>
      <img src={images[currentImageIndex]} alt="Carousel Slide" />
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default Carousel;
