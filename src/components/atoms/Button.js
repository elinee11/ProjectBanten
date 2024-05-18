import classNames from "classnames";
import { Link } from "react-router-dom";

export default function Button({ color, href, children, className, onClick }) {
  const handleOnClick = () => {
    if (onClick) onClick();
  };

  return onClick === undefined ? (
    <Link
      to={href}
      className={classNames(
        "py-3 px-6 text-center rounded-full text-white-50",
        {
          "bg-big-stone-500 hover:bg-big-stone-600": color === "primary",
        },
        className
      )}
    >
      {children}
    </Link>
  ) : (
    <button
      className={classNames(
        "py-3 px-6 text-center rounded-full text-white-50",
        {
          "bg-big-stone-500 hover:bg-big-stone-600": color === "primary",
        },
        className
      )}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
}
