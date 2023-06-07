import { useLayoutEffect, useRef } from 'react';
import DivGlass from './DivGlass';
import { gsap } from 'gsap';

export default function LangSelector({ setShowLang }) {
  const lang = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(lang.current, {
        opacity: 0,
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  const handleClick = () => {
    gsap.to(lang.current, {
      opacity: 0,
      duration: 0.5,
      onComplete() {
        setShowLang(false);
      },
    });
  };

  return (
    <div
      ref={lang}
      onClick={handleClick}
      className="absolute right-0 top-14 text-base"
    >
      <DivGlass>
        <div className="w-32">
          <button className="w-full p-4 hover:bg-white/20">Español (ES)</button>
          <button className="w-full p-4 line-through hover:bg-white/20">
            English (EN)
          </button>
        </div>
      </DivGlass>
    </div>
  );
}
