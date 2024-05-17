import { Link } from "react-router-dom";

export default function CardFullWidth({ title, slug, description, image }) {
  return (
    <div className="w-full shadow-lg flex flex-col">
      <div className="relative w-full h-[250px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover bg-center"
        />
      </div>
      <div className="w-full p-5">
        <Link
          to={slug}
          className="text-white-950 hover:text-white-600 text-2xl font-bold"
        >
          {title}
        </Link>
        <div
          className="mt-2 text-white-600"
          dangerouslySetInnerHTML={{
            __html: description.slice(0, 200) + "...",
          }}
        ></div>
      </div>
    </div>
  );
}
