export default function Hero() {
  return (
    <div
      id="home"
      className="container relative mx-auto flex h-screen flex-col justify-center px-4"
    >
      <h1 className="text-3xl font-medium uppercase lg:text-7xl">
        Trabajando en la transformación de grandes ideas en experiencias
        digitales únicas
      </h1>

      <div className="absolute bottom-8 mt-20">
        <p className="text-sm font-bold uppercase">Rodrigo Rodríguez</p>
        <p className="text-xs text-gray-200">Desarrollador Web Fullstack</p>
      </div>
    </div>
  );
}
