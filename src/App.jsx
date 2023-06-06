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
    <div className="bg-black font-sans text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
