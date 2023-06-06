export default function SkillCard() {
  return (
    <div className="rounded-2xl shadow border border-gray-200 hover:shadow-2xl duration-300 hover:-translate-y-2 overflow-hidden">
      <div className="p-6">
        <p className="uppercase text-sm text-gray-700 tracking-widest ">
          Desarrollo Frontend
        </p>
        <p className="text-xl font-bold my-3">Elaboración de Sitios Web</p>
        <p className="text-sm">
          Por medio de HTML, CSS, JS, React, React-router-dom, GSAP, Framer
          motion.
        </p>
      </div>
      <div className="h-40 bg-gradient-to-b from-transparent to-teal-100"></div>
    </div>
  );
}
