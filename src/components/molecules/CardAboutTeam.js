export default function CardAboutTeam({ name, quote, image }) {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-[300px]">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h6 className="text-lg font-bold my-5">{name}</h6>
      <p className="text-white-600">{quote}</p>
    </div>
  );
}
