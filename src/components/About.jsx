import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import WordReveal from './WordReveal';
import DivGlass from './DivGlass';

export default function About() {
  const firstText =
    'Soy un Desarrollador Fullstack y Diseñador Web actualmente viviendo en Argentina.';
  const firstTextDisplay = firstText
    .split(' ')
    .map((word, i) => <WordReveal key={i} word={word} />);

  const secondText =
    'Me apasiona la creación de grandes experiencias digitales, siempre enfocado en la microgestión de cada detalle e interacción para optimizar las experiencias de usuarios.';
  const secondTextDisplay = secondText
    .split(' ')
    .map((word, i) => <WordReveal key={i + 'b'} word={word} />);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#about',
            scrub: 0.5,
            start: 'top -30%',
            end: 'bottom 0%',
            pin: true,
            //markers:true
          },
        })
        .fromTo(
          '.word',
          { opacity: '30%' },
          {
            opacity: '100%',
            duration: 1,
            ease: 'none',
            stagger: 1,
          }
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="about" className="container mx-auto px-4 py-40 uppercase">
      <div className="flex flex-col items-center">
        <DivGlass className="p-4">
          <div className="m-2 h-40 w-40 rounded-2xl bg-indigo-500"></div>
        </DivGlass>
        <h2 className="mt-8 text-center text-4xl font-bold lg:text-6xl">
          ¡Hola, soy Rodrigo!
        </h2>
      </div>
      <div>
        <div id="text" className="mt-16 text-2xl font-medium lg:text-4xl">
          <p className="leading-tight">{firstTextDisplay}</p>
          <p className="mt-6 leading-tight">{secondTextDisplay}</p>
        </div>
      </div>
    </div>
  );
}
