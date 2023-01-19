import { useContext } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { stateContext } from "../../../../store/State";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Profile = () => {
  const { client, logout } = useContext(stateContext);
  const navigate = useNavigate();
  const handleClick = () => {
    logout();
    toast("Logged out");
    navigate("/");
  };
  return (
    <div className="flex items-center gap-2 border p-5">
      <div className="grow overflow-hidden">
        <span className="block truncate font-semibold">{client.uid}</span>
        <span className="text-sm text-secondary">ID # {client.id}</span>
      </div>
      <button className="btn" onClick={handleClick}>
        <Icon icon={faDoorOpen} />
      </button>
    </div>
  );
};

export default Profile;
