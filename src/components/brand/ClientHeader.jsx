import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Header from "../brand/Header";

const ClientHeader = () => {
  return (
    <div className="flex items-center">
      <label htmlFor="client-drawer" className="btn-primary btn lg:hidden">
        <Icon icon={faBars} />
      </label>
      <div className="grow">
        <Header />
      </div>
    </div>
  );
};

export default ClientHeader;
