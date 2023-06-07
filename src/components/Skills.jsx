import SkillCard from './SkillCard';

export default function Skills() {
  return (
    <div className="container mx-auto p-4">
      <div className="p-4 lg:p-10">
        <h2 className="text-2xl font-bold text-indigo-400">• Habilidades</h2>
        <p className="mt-2 text-5xl font-bold lg:text-7xl">
          Mi propuesta
          <br /> de valor
        </p>
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-4">
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </div>
  );
}
