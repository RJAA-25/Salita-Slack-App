import { useContext } from "react";
import { stateContext } from "../../../../store/State";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Channels = () => {
  const { channels } = useContext(stateContext);
  return (
    <div className="my-5 border-slate-500">
      <div className="flex items-center py-3">
        <span className="grow font-bold">Channels</span>
        <button className="btn-sm btn">
          <Icon icon={faPlus} />
        </button>
      </div>
      {channels.length > 0 ? (
        <ul className="menu w-full ">
          {channels.map((channel) => (
            <li key={channel.id} className="hover-bordered">
              <NavLink to={`channels/${channel.id}`}>{channel.name}</NavLink>
            </li>
          ))}
        </ul>
      ) : (
        <span className="block pl-5 text-sm ">No channels found</span>
      )}
    </div>
  );
};

export default Channels;
