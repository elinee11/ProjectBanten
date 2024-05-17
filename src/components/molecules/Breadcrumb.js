import { Link, useLocation } from "react-router-dom";
import { MdHome } from "react-icons/md";

export default function Breadcrumb() {
  const ucFrist = (value = []) => {
    return value
      .replaceAll("-", " ")
      .split(" ")
      .map(
        (val) =>
          `${val[0].toLocaleUpperCase() + val.slice(1).toLocaleLowerCase()}`
      )
      .join(" ");
  };

  const location = useLocation();
  const paths = [
    {
      name: "Beranda",
      href: "/",
    },
  ];

  location.pathname
    .slice(1)
    .split("/")
    .forEach((currentPath, index, array) => {
      const href = `/${array.slice(0, index + 1).join("/")}`;
      paths.push({
        name: ucFrist(currentPath) || "Halaman",
        href: href || "/",
      });
    });

  return (
    <div className="mb-8">
      <ul className="flex space-x-2">
        {paths.map((currentPath, index) => (
          <li key={index} className="flex">
            <Link
              to={currentPath.href}
              className="flex items-center space-x-1 hover:underline"
            >
              {currentPath.name === "Beranda" && <MdHome />}
              <span>{currentPath.name}</span>
            </Link>
            {index !== paths.length - 1 && (
              <span className="inline-block ml-2">/</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
