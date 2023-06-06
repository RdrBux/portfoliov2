import DivGlass from './DivGlass';
import Navlink from './Navlink';

export default function Navlinks() {
  return (
    <nav>
      <DivGlass>
        <ul className="flex rounded-2xl bg-clip-padding px-8 font-medium">
          <Navlink text="Inicio" link="home" />
          <Navlink text="Sobre mí" link="about" />
          <Navlink text="Proyectos" link="work" />
          <Navlink text="Contacto" link="contact" />
        </ul>
      </DivGlass>
    </nav>
  );
}
