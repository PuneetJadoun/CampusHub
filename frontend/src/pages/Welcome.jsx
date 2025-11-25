{/*import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";*/}

import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import FAQ from "../components/FAQ";


function Welcome() {
  return (
    <div>
    {/* 
      <Navbar />

      <Footer /> 
    */}

     <MainLayout >

      {/*<h1 className="text-3xl font-bold">Welcome to CampusHub</h1>  {/* Example content */}
      {/*<p>This is the welcome page content.</p>*/}

      <HeroSection />

      <Features />

      <HowItWorks />

      <FAQ />

    </MainLayout>

    </div>
  );
}

export default Welcome;
