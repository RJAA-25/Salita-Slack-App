import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";

const ClientHeader = () => {
  return (
    <header className="flex h-14 items-center rounded border border-amber-500">
      <label htmlFor="client-drawer" className="btn-primary btn lg:hidden">
        <Icon icon={faBars} />
      </label>
      <div className="grow">
        <Logo />
      </div>
    </header>
  );
};

export default ClientHeader;
