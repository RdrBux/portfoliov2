export default function WordReveal({ word }) {
  return (
    <span className="relative">
      {word}{' '}
      <span className="reveal | absolute left-0 h-full w-0 overflow-hidden text-white">
        {word}{' '}
      </span>
    </span>
  );
}
