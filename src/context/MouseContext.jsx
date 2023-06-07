import { createContext, useEffect, useState } from 'react';

export const MouseContext = createContext({ x: 0, y: 0 });

export const MouseContextProvider = ({ children }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <MouseContext.Provider value={mousePos}>{children}</MouseContext.Provider>
  );
};
