import { Link } from "react-router-dom";
import useToggle from "../hooks/useToggle";

export default function Dropdown({ label, items }) {
  const { on, toggle, off } = useToggle(false);
  return (
    <div className="relative" onMouseLeave={off}>
      <button
        onMouseEnter={toggle}
        onClick={toggle}
        className="inline-flex items-center gap-1"
        aria-haspopup="menu"
        aria-expanded={on}
      >
        {label}
        <span className="material-icons text-sm">expand_more</span>
      </button>
      {on && (
        <div
          className="absolute right-0 mt-2 w-44 rounded-md border bg-white shadow"
          role="menu"
        >
          {items.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="block px-3 py-2 hover:bg-gray-50"
              role="menuitem"
            >
              {i.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
