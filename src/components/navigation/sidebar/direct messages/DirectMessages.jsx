import React, { useContext } from "react";
import { stateContext } from "../../../../store/State";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import UserForm from "../../../form/UserForm";

const DirectMessages = (props) => {
  const { setChecked } = props;
  const { dMessages, setModalContent } = useContext(stateContext);
  const modalContent = {
    title: "Send New Message",
    body: <UserForm />,
  };
  const handleClick = () => {
    setChecked(false);
    setModalContent(modalContent);
  };

  return (
    <div className="my-5">
      <div className="flex items-center py-3">
        <span className="grow font-bold">Direct Messages</span>
        <label
          htmlFor="client-modal"
          className="btn-sm btn"
          onClick={handleClick}
        >
          <Icon icon={faPlus} />
        </label>
      </div>
      {dMessages.length > 0 ? (
        <ul className="menu w-full">
          {dMessages.map((dMessage) => (
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
