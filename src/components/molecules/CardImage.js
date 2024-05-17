import classNames from "classnames";
import { Link } from "react-router-dom";

export default function CardImage({
  image,
  title,
  description,
  href,
  bgTransparent,
  noPadding,
  shadow,
}) {
  return (
    <a href={href}>
 <div
      className={classNames("flex flex-col", {
        "bg-white-50": bgTransparent === undefined,
        "p-3 md:p-4": noPadding === undefined,
        "shadow-lg": shadow,
      })}
    >
      <div className="relative w-full h-[200px] md:h-[280px]">
        <img src={image} alt={image} className="object-cover w-full h-full" />
      </div>
      <div
        className={classNames({
          "p-3": noPadding,
          "pt-3": noPadding === undefined,
        })}
      >
        <Link
          to={href}
          className={classNames("font-medium text-lg md:text-xl py-3", {
            "text-white-950 hover:text-white-800": bgTransparent === undefined,
            "text-white-50 hover:text-white-400": bgTransparent,
          })}
        >
          {title}
        </Link>
        <div
          className={classNames("text-md", {
            "text-white-600": bgTransparent === undefined,
            "text-white-400": bgTransparent,
          })}
          dangerouslySetInnerHTML={{
            __html: description.slice(0, 100) + "...",
          }}
        ></div>
      </div>
    </div>
    </a>
   
  );
}
