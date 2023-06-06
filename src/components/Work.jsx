export default function Work() {
  return (
    <div id="work" className="container mx-auto mt-40 p-4">
      <div className="p-4 lg:p-10">
        <h2 className="text-2xl font-bold text-sky-400">
          • Trabajos recientes
        </h2>
        <p className="mt-2 text-5xl font-bold lg:text-7xl">
          Mis aportes
          <br /> al mundo
        </p>
      </div>
      <div className="grid rounded-2xl bg-white/5 py-10 lg:grid-cols-2">
        <div className="flex flex-col gap-4 px-4 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-300">
            Portfolio personal
          </p>
          <h4 className="text-5xl font-bold lg:text-7xl">Dulcinea Rodríguez</h4>
          <p className="text-lg text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            nesciunt et laudantium dicta non, consequatur iure assumenda quos
            provident deserunt.
          </p>
          <button className="">Ver más</button>
        </div>
        <div className="h-[500px] rounded-l-3xl border border-white/10 bg-white/10 py-3 pl-3 shadow-sm">
          <div className="h-full rounded-l-2xl bg-red-500"></div>
        </div>
      </div>
    </div>
  );
}
