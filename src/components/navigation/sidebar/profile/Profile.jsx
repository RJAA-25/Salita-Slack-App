import { useContext } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { stateContext } from "../../../../store/State";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { getLocal } from "../../../../helpers/localStorage";

const Profile = () => {
  const { logout } = useContext(stateContext);
  const salita = getLocal("salita") || {};
  const navigate = useNavigate();
  const handleClick = () => {
    logout();
    navigate("/login");
    toast("Logged out");
  };
  return (
    <div className="flex items-center gap-2 border p-5 lg:rounded">
      <div className="grow overflow-hidden">
        <span className="block truncate font-semibold">
          {salita.client?.uid}
        </span>
        <span className="text-sm text-secondary">ID # {salita.client?.id}</span>
      </div>
      <button className="btn" onClick={handleClick}>
        <Icon icon={faDoorOpen} />
      </button>
    </div>
  );
};

export default Profile;
