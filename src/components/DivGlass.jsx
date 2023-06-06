export default function DivGlass({ children }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg backdrop-filter">
      {children}
    </div>
  );
}
