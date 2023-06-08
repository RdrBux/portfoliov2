import SkillCard from './SkillCard';

export default function Skills() {
  const skills = [
    {
      skill: 'Desarrollo Frontend',
      description:
        'Elaboración y escritura del Frontend por medio de tecnologías como HTML, CSS, JavaScript, TypeScript, React, React-router-dom, Tailwind, GSAP, Framer motion.',
    },
    {
      skill: 'Desarrollo Backend',
      description:
        'Elaboración del backend por medio de Node.js y Express. Desarrollo de bases de datos SQL y No-SQL (MongoDB).',
    },
    {
      skill: 'Testing',
      description:
        'Desarrollo basado en tests (TDD), Unit tests, Integration tests, UI tests. Empleo de Jest y Cypress principalemente.',
    },
    {
      skill: 'Diseño web',
      description:
        'Diseño por medio de Figma, creación y optimización de assets con Photoshop e Illustrator.',
    },
  ];

  const skillCards = skills.map((skill) => (
    <SkillCard key={skill.skill} skills={skill} />
  ));

  return (
    <div className="container mx-auto p-4">
      <div className="p-4 lg:px-20 lg:py-10">
        <h2 className="text-2xl font-bold text-indigo-400">• Habilidades</h2>
        <p className="mt-2 text-5xl font-bold lg:text-7xl">
          Mi propuesta
          <br /> de valor
        </p>
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-4">{skillCards}</div>
    </div>
  );
}
