import AboutSection from '@/src/components/about';
import FeaturedCities from '@/src/components/featured-cities';
import Footer from '@/src/components/shared/footer';
import HeroSection from '@/src/components/hero';
import Navbar from '@/src/components/shared/navbar';
import PromotionalSection from '@/src/components/promotional_section';
import TourPackages from '@/src/components/tour-packages';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Navbar />

      <TourPackages />
      <FeaturedCities />

      <AboutSection />
      <PromotionalSection />
        <Footer />

    </div>
  );
};

export default LandingPage;
