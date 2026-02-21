import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import FAQ from '../components/FAQ';

function Welcome() {
  return (
    <div>
    {/* 
      <Navbar />

      <Footer /> 
    */}


      <MainLayout>

        <HeroSection />

        <Features />

        <HowItWorks />

        <FAQ />
        
      </MainLayout>
    </div>
  );
}

export default Welcome;
