import { Star } from 'lucide-react';
import React, { useState } from 'react';

const StackedPhotoCarousel: React.FC = () => {
  const [zIndex, setZIndex] = useState(1);
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Track the active image

  const imageUrls = [
    'https://sourcemediaagency.com/wp-content/uploads/2025/02/1-scaled.jpg',
    'https://sourcemediaagency.com/wp-content/uploads/2025/02/3-scaled.jpg',
    'https://sourcemediaagency.com/wp-content/uploads/2025/02/8-scaled.jpg',
    'https://sourcemediaagency.com/wp-content/uploads/2025/02/6-scaled.jpg',
  ];

  const handleClick = (index: number) => {
    if (activeIndex === index) {
      // If the clicked image is already active, revert it back
      const element = document.getElementById(`image-container-${index}`);
      if (element) {
        element.style.right = '';
        element.style.zIndex = '1';
        element.style.transform = '';
        element.style.transition = 'all 0.3s ease';
      }
      setActiveIndex(null); // Reset active index
    } else {
      // If a new image is clicked, bring it to the front
      setZIndex((prevZIndex) => prevZIndex + 1);
      setActiveIndex(index);

      const element = document.getElementById(`image-container-${index}`);
      if (element) {
        element.style.right = '50em';
        element.style.zIndex = zIndex.toString();
        element.style.transform = 'rotate(0deg)';
        element.style.transition = 'right 0.3s ease';
      }
    }
  };

  return (
    <div className="gallery-container relative bg-transparent p-4" id='offers'>
      <h2 className="text-center text-3xl font-bold text-white">عروضنا الحصرية</h2>
      <div className="flex items-center justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="text-yellow-500" />
        ))}
      </div>
      <div className='flex justify-center'>
      {imageUrls.map((url, index) => (
        <div
          key={index}
          id={`image-container-${index}`}
          className={`image-container absolute top-40 right-40 w-96 ${
            activeIndex === index ? '' : // No rotation for active image
            index === 0
              ? 'rotate-6'
              : index === 1
              ? 'rotate-[-32deg]'
              : index === 2
              ? 'rotate-16'
              : ''
          }`}
          onClick={() => handleClick(index)}
        >
          <img
            src={url}
            alt={`Image ${index + 1}`}
            className="image rounded-3xl w-full h-full border-8 border-white cursor-pointer"
          />
        </div>
      ))}
      </div>
    </div>
  );
};

export default StackedPhotoCarousel;