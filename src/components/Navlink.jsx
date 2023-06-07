export default function Navlink({ text, link }) {
  return (
    <li className="cursor-pointer bg-gradient-to-r from-teal-300 to-indigo-300 bg-clip-text p-4 hover:text-transparent">
      <a href={`#${link}`}>{text}</a>
    </li>
  );
}
