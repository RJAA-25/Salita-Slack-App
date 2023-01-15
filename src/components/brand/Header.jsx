import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <header className="grid h-14 place-content-center rounded border border-red-500">
      <Link to="/" className="flex items-baseline gap-2 border p-2">
        <Icon icon={faComments} className="text-lg" />
        <span className="text-xl font-extrabold">salita</span>
      </Link>
    </header>
  );
};

export default Header;
