import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { FaTiktok, FaWhatsapp } from "react-icons/fa";


const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12" dir='rtl'>
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img
              src="/images/logo.png" // Replace with your logo URL
              alt="Source Media Agency Logo"
              className="h-32"
            />
            <p className="text-gray-400">
            نحن وكالة دعايا واعلان نعمل علي ادارة الصفحات علي جميع منصات التواصل الاجتماعي
            </p>
            <p className="text-orange-500 font-semibold">
              Powered by Source Media Agency
            </p>
            <p className="text-gray-400">تخصص تلميع براندات</p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-orange-500 font-semibold text-lg">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                  الخدمات
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                  عنا
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-orange-500 font-semibold text-lg">تابعنا</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                <FaTiktok size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                <Instagram size={24} />
              </a>

              <a
                href="https://wa.me/+201278183718"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                <FaWhatsapp className='text-green-500 hover:text-green-600' size={24} />
              </a>

            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-orange-500 font-semibold text-lg">تواصل معنا</h3>
            <p className="text-gray-400">البريد الإلكتروني: info@sourcemedia.com</p>
            <p className="text-gray-400">الهاتف: +966 123 456 789</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Source Media Agency. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;