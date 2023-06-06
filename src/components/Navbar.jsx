import DivGlass from './DivGlass';
import Navlinks from './Navlinks';

export default function Navbar() {
  return (
    <div className="container fixed left-0 right-0  top-8 z-50 mx-auto hidden items-center justify-between text-sm lg:flex">
      <div className="text-lg font-bold">RR</div>
      <Navlinks />
      <DivGlass>
        <button className="flex h-12 items-center justify-center gap-1 pl-4 pr-2 font-semibold">
          ES{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </DivGlass>
    </div>
  );
}
