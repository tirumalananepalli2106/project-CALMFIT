import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Portfolio from './components/Portfolio';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'services', 'why-us', 'portfolio', 'team', 'blog', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Trigger threshold offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-secondary-teal selection:text-white">
      {/* Dynamic Sticky Header Navigation */}
      <Navbar activeSection={activeSection} />
      
      {/* Complete multi-section business website */}
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Portfolio />
        <Statistics />
        <Testimonials />
        <Team />
        <Blog />
        <Contact />
      </main>

      {/* Brand Footer directory with licensing */}
      <Footer />
    </div>
  );
}
