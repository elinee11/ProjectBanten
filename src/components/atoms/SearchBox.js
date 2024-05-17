import classNames from "classnames";
import { FaSearch } from "react-icons/fa";

export default function SearchBox({ data, result, placeholder, className }) {
  const handleChangeInput = (e) => {
    const input = e.target.value;
    if (input !== "") {
      result(
        data.filter((field) =>
          field.title.rendered
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        )
      );
    } else {
      result(data);
    }
  };

  return (
    <div className="relative">
      <input
        className={classNames(
          "p-2 pl-10 w-full border border-white-400",
          className
        )}
        onChange={handleChangeInput}
        placeholder={placeholder}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FaSearch className="text-gray-400" />
      </div>
    </div>
  );
}
