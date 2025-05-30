
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import BubblesBackground from '../components/BubblesBackground';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <BubblesBackground />
      <Header />
      <main>
        <HeroSlider />
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
