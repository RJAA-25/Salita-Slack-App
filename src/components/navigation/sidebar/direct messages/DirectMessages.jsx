import React, { useContext } from "react";
import { stateContext } from "../../../../store/State";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const DirectMessages = () => {
  const { dMessages } = useContext(stateContext);

  return (
    <div className="my-5  border-slate-500">
      <div className="flex items-center py-3">
        <span className="grow font-bold">Direct Messages</span>
        <button className="btn-sm btn">
          <Icon icon={faPlus} />
        </button>
      </div>
      {dMessages.length > 0 ? (
        <ul className="menu w-full">
          {dMessages.map((dMessage) => (
            <li key={dMessage.id} className="hover-bordered">
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
