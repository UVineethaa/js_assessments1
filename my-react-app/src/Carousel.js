import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrev}>❮</button>
      <div className="carousel-item">
        <img src={items[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="carousel-button next" onClick={handleNext}>❯</button>
    </div>
  );
};

export default Carousel;
