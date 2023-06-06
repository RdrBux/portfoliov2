import SkillCard from './SkillCard';

export default function Skills() {
  return (
    <div className="container mx-auto mt-32">
      <h2 className="font-bold text-4xl">Habilidades</h2>
      <div className="grid grid-cols-4 mt-4 gap-4">
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </div>
  );
}
