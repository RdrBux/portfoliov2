import DivGlass from './DivGlass';

export default function SkillCard({ skills }) {
  const { skill, description } = skills;
  return (
    <div className="relative cursor-default">
      <DivGlass>
        <div className="p-6">
          {/* <p className="text-sm uppercase tracking-widest text-indigo-300">
            {skill}
          </p> */}
          <p className="text-2xl font-bold">{skill}</p>
          <p className="mt-2 text-sm">{description}</p>
        </div>
      </DivGlass>
    </div>
  );
}
