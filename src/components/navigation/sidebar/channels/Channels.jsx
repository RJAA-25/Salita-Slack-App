import { useContext } from "react";
import { stateContext } from "../../../../store/State";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Channels = (props) => {
  const { setChecked } = props;
  const { channels } = useContext(stateContext);

  return (
    <div className="my-5">
      <div className="flex items-center py-3">
        <span className="grow font-bold">Channels</span>
        <label
          htmlFor="client-modal"
          className="btn-sm btn"
          onClick={() => setChecked(false)}
        >
          <Icon icon={faPlus} />
        </label>
      </div>
      {channels.length > 0 ? (
        <ul className="menu w-full ">
          {channels.map((channel) => (
            <li
              key={channel.id}
              className="hover-bordered"
              onClick={() => setChecked(false)}
            >
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
