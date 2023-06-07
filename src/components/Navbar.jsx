import { useState } from 'react';
import DivGlass from './DivGlass';
import LangSelector from './LangSelector';
import Navlinks from './Navlinks';

export default function Navbar() {
  const [showLang, setShowLang] = useState(false);

  return (
    <div className="navbar | container fixed left-0 right-0 top-8  z-50 mx-auto flex items-center justify-between px-4 text-sm">
      <div className="text-lg font-bold">RR</div>
      <Navlinks />
      <div className="relative">
        <DivGlass>
          <button
            onClick={() => setShowLang(true)}
            className="flex h-12 items-center justify-center gap-1 pl-3 pr-1 font-semibold"
          >
            ES{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
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
        {showLang && <LangSelector setShowLang={setShowLang} />}
      </div>
    </div>
  );
}
