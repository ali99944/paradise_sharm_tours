'use client';

import AboutSection from '@/src/components/about';
import Footer from '@/src/components/shared/footer';
import HeroSection from '@/src/components/hero';
import Navbar from '@/src/components/shared/navbar';
import PromotionalSection from '@/src/components/promotional_section';
import TourPackages from '@/src/components/tour-packages';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      {/* <nav className="max-md:flex md:hidden items-center space-x-6 justify-center p-4">
            <Link href="/" className="text-[#1B468F] font-bold hover:text-[#F15A29] transition-colors">
              Home
            </Link>
            <Link href="/tours" className="text-[#1B468F] font-bold hover:text-[#F15A29] transition-colors">
              Tours
            </Link>
            <Link href="/about" className="text-[#1B468F] font-bold hover:text-[#F15A29] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-[#1B468F] font-bold hover:text-[#F15A29] transition-colors">
              Contact
            </Link>

          </nav> */}
      <Navbar />
      <TourPackages />
      {/* <FeaturedCities /> */}
      <AboutSection />
      <PromotionalSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
