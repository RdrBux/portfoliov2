import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import WordReveal from './WordReveal';

export default function About() {
  const firstText =
    'Soy un Desarrollador Fullstack y Diseñador Web actualmente viviendo en Argentina';
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
            scrub: 0.3,
            start: 'top -10%',
            end: 'bottom 0%',
            pin: true,
            //markers:true
          },
        })
        .to('.reveal', {
          width: '100%',
          duration: 1,
          ease: 'none',
          stagger: 1,
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="about" className="container mx-auto px-4 py-40 uppercase">
      <h2 className="mt-8 text-center text-4xl font-bold lg:text-6xl">
        ¡Hola, soy Rodrigo!
      </h2>
      <div className="">
        <div
          id="text"
          className="mt-16 text-2xl font-medium text-gray-500 lg:text-4xl"
        >
          <p>{firstTextDisplay}</p>
          <p className="mt-4">{secondTextDisplay}</p>
        </div>
      </div>
    </div>
  );
}
