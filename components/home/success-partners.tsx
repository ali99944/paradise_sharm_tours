import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

const SuccessPartnersCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalImages = 10; // Total number of partner images
  const imagesPerView = 3; // Number of images to show per view
  const totalSlides = Math.ceil(totalImages / imagesPerView); // Total slides based on images per view

  const autoMoveInterval = useRef<NodeJS.Timeout | null>(null);

  // Array of image URLs (replace with your actual image URLs)
  const imageUrls = [
    'https://sourcemediaagency.com/wp-content/uploads/2025/02/5-5-scaled.jpg',
    'https://sourcemediaagency.com/wp-content/uploads/2025/02/20.png',
    'https://sourcemediaagency.com/wp-content/uploads/2025/02/19.png',
    'https://sourcemediaagency.com/wp-content/uploads/2025/02/13-1-scaled.jpg',
    'https://sourcemediaagency.com/wp-content/uploads/2025/02/12-1-scaled.jpg',
    'https://sourcemediaagency.com/wp-content/uploads/2025/02/11-2-scaled.jpg',
    'https://sourcemediaagency.com/wp-content/uploads/2025/02/10-2-scaled.jpg',
    'https://sourcemediaagency.com/wp-content/uploads/2025/02/9-3-scaled.jpg',
    'https://sourcemediaagency.com/wp-content/uploads/2025/02/8-4-scaled.jpg',
    'https://sourcemediaagency.com/wp-content/uploads/2025/02/7-4-scaled.jpg',
    'https://sourcemediaagency.com/wp-content/uploads/2025/02/6-4-scaled.jpg',
  ]

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Function to handle dot click
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Start auto-moving the carousel
  useEffect(() => {
    if (!isPaused) {
      autoMoveInterval.current = setInterval(nextSlide, 3000);
    }
    return () => {
      if (autoMoveInterval.current) {
        clearInterval(autoMoveInterval.current);
      }
    };
  }, [isPaused]);

  return (
    <div
    id='success-partners'
      className="relative w-full mx-auto p-4"
      onMouseEnter={() => setIsPaused(true)} // Pause on hover
      onMouseLeave={() => setIsPaused(false)} // Resume on mouse leave
    >
              <h2 className="text-center text-3xl font-bold text-white">شركاء النجاح</h2>
      <div className="flex items-center justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="text-yellow-500" />
        ))}
      </div>
      {/* Carousel Container */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0 flex">
              {imageUrls
                .slice(slideIndex * imagesPerView, (slideIndex + 1) * imagesPerView)
                .map((url, imgIndex) => (
                  <div key={imgIndex} className="w-1/3 p-2">
                    <img
                      src={url}
                      alt={`Partner ${slideIndex * imagesPerView + imgIndex + 1}`}
                      className="w-full rounded-lg shadow-lg h-74 object-cover object-bottom"
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        onClick={prevSlide}
      >
        <ArrowLeft />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        onClick={nextSlide}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default SuccessPartnersCarousel;
