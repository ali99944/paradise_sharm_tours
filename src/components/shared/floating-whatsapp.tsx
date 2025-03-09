import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppIcon: React.FC = () => {
  const phoneNumber = '+201278183718'; // Replace with your WhatsApp number
  const message = 'Hello! I have a question.'; // Optional: Predefined message

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-50"
      onClick={handleClick}
    >
      <div className="bg-green-500 p-2 rounded-full shadow-lg hover:bg-green-600 transition cursor-pointer">
        <FaWhatsapp className="text-white" size={32} />
      </div>
    </div>
  );
};

export default FloatingWhatsAppIcon;