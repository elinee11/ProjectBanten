import { Link } from "react-router-dom";

export default function NavLink({ title, href, onClick }) {
  const handleOnClick = () => {
    if (onClick) onClick();
  };

  return (
    <li>
      <Link
        to={href}
        onClick={handleOnClick}
        className="text-white-950 hover:text-white-600"
      >
        {title}
      </Link>
    </li>
  );
}
