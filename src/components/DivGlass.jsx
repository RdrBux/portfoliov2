import { useContext, useRef } from 'react';
import { MouseContext } from '../context/MouseContext';

export default function DivGlass({ children }) {
  const mouse = useContext(MouseContext);
  const rect = { x: -300, y: -300 };
  const glassDiv = useRef();

  if (glassDiv.current) {
    const rectData = glassDiv.current.getBoundingClientRect();
    rect.x = rectData.left + 128;
    rect.y = rectData.top + 128;
  }

  /* const [mousePos, setMousePos] = useState({}); */
  /* useEffect(() => {
    const rect = glassDiv.current.getBoundingClientRect();
    shine.current.style.left = mousePos.x - rect.left;
    console.log(shine.current.style);
    console.log('rect:', rect.left);
  }, [mousePos]); */

  /* const handleMove = () => {
    const rect = glassDiv.current.getBoundingClientRect();
    setMousePos({
      x: mouse.x - rect.left - 128,
      y: mouse.y - rect.top - 128,
    });
  }; */

  return (
    <div
      /* onMouseMove={handleMove} */
      ref={glassDiv}
      className="group relative overflow-hidden rounded-2xl"
    >
      <div
        style={{
          left: mouse.x - rect.x,
          top: mouse.y - rect.y,
        }}
        className="absolute h-64 w-64 rounded-full bg-white/[15%] blur-2xl group-hover:block"
      ></div>
      <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-white/10 shadow-sm backdrop-blur backdrop-filter">
        {children}
      </div>
    </div>
  );
}
