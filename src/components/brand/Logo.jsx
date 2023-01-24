import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { getLocal } from "../../helpers/localStorage";

const Logo = () => {
  const salita = getLocal("salita");
  const destination = salita ? "/client" : "/login";

  return (
    <Link
      to={destination}
      className="mx-auto flex w-fit items-baseline gap-2 rounded p-2 text-white transition hover:bg-accent"
    >
      <Icon icon={faComments} className="text-lg" />
      <span className="text-xl font-extrabold">salita</span>
    </Link>
  );
};

export default Logo;
