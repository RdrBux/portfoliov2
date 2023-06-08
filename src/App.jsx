import { gsap } from 'gsap';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';
import { ScrollTrigger } from 'gsap/all';
import Contact from './components/Contact';
import { useLayoutEffect } from 'react';
import { MouseContextProvider } from './context/MouseContext';

function App() {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from('.hero-text', {
        yPercent: 110,
        duration: 2,
        stagger: 0.2,
        ease: 'power4.inOut',
        delay: 0.3,
      }).from(['.navbar', '.name'], {
        opacity: 0,
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-black font-sans text-white">
      <div className="fixed bottom-1/4 left-16 h-[35vw] w-[40vw] animate-blob rounded-full bg-teal-300/10 blur-3xl filter md:top-1/4"></div>
      <div className="animation-delay-4000 fixed right-16 top-1/4 h-[35vw] w-[35vw] animate-blob rounded-full bg-sky-300/10 blur-3xl filter md:top-0"></div>

      <div className="relative z-40">
        <MouseContextProvider>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Work />
          <Contact />
        </MouseContextProvider>
      </div>
    </div>
  );
}

export default App;
