export default function Hero() {
  return (
    <div
      id="home"
      className="container relative mx-auto flex h-screen flex-col justify-center px-4"
    >
      <div className="text-center text-[8.5vw] font-medium uppercase leading-[95%] lg:text-7xl">
        <div className="overflow-hidden">
          <p className="hero-text">Trabajando en</p>
        </div>
        <div className="overflow-hidden">
          <p className="hero-text">la transformación</p>
        </div>
        <div className="overflow-hidden">
          <p className="hero-text">de grandes ideas</p>
        </div>
        <div className="overflow-hidden">
          <p className="hero-text">en experiencias</p>
        </div>
        <div className="overflow-hidden">
          <p className="hero-text">digitales únicas</p>
        </div>
      </div>

      <div className="name | absolute bottom-24 mt-20 lg:bottom-8">
        <p className="text-sm font-bold uppercase">Rodrigo Rodríguez</p>
        <p className="text-xs text-teal-300">Desarrollador Web Fullstack</p>
      </div>
    </div>
  );
}
