import { gsap } from 'gsap';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';
import { ScrollTrigger } from 'gsap/all';

function App() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="relavite bg-black font-sans text-white">
      <div className="fixed left-4 top-1/4 h-[30vw] w-[30vw] rounded-full bg-teal-300/10 blur-3xl filter"></div>
      <div className="fixed right-4 top-1/4 h-[30vw] w-[30vw] rounded-full bg-purple-300/10 blur-3xl filter"></div>
      <div className="relative z-40">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Work />
      </div>
    </div>
  );
}

export default App;
