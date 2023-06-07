import DivGlass from './DivGlass';

export default function SkillCard() {
  return (
    <div className="group relative cursor-default duration-100">
      <div className="absolute inset-0 rounded-2xl border-x-indigo-300 border-y-blue-300 blur-sm duration-100 group-hover:border-2"></div>
      <DivGlass>
        <div className="p-6">
          <p className="text-sm uppercase tracking-widest text-indigo-300">
            Desarrollo Frontend
          </p>
          <p className="my-3 text-xl font-bold">Elaboración de Sitios Web</p>
          <p className="text-sm">
            Elaboración y escritura del Frontend por medio de tecnologías como
            HTML, CSS, JavaScript, TypeScript, React, React-router-dom, GSAP,
            Framer motion.
          </p>
        </div>
      </DivGlass>
    </div>
  );
}
