export default function DivGlass({ children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-bl from-white/20 to-white/10 backdrop-blur-sm backdrop-filter">
      {children}
    </div>
  );
}
