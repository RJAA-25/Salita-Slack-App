import { useContext } from "react";
import { stateContext } from "../../../../store/State";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import UserForm from "../../../form/UserForm";
import { useEffect } from "react";
import { getDMUsers } from "../../../../api/slack";

const DirectMessages = (props) => {
  const { setChecked } = props;
  const { dMUsers, setDMUsers, setModalContent } = useContext(stateContext);
  const modalContent = {
    title: "Send New Message",
    body: <UserForm />,
  };
  const toggleModal = () => {
    setChecked(false);
    setModalContent(modalContent);
  };
  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await getDMUsers();
      setDMUsers(response);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-5">
      <div className="flex items-center pb-3">
        <span className="grow text-lg font-bold text-primary">
          Direct Messages
        </span>
        <label
          htmlFor="client-modal"
          className="btn-primary btn-sm btn"
          onClick={toggleModal}
        >
          <Icon icon={faPlus} />
        </label>
      </div>
      {dMUsers.length > 0 ? (
        <ul className="menu w-full">
          {dMUsers.map((dMessage) => (
            <li
              key={dMessage.id}
              className="hover-bordered"
              onClick={() => setChecked(false)}
            >
              <NavLink to={`messages/${dMessage.id}`} className="truncate">
                {dMessage.uid}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        <span className="block pl-5 text-sm ">No messages found</span>
      )}
    </div>
  );
};

export default DirectMessages;
