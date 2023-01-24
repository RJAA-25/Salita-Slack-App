import { useContext, useEffect } from "react";
import { stateContext } from "../../../../store/State";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import ChannelForm from "../../../form/ChannelForm";
import { getChannels } from "../../../../api/slack";

const Channels = (props) => {
  const { setChecked } = props;
  const { channels, setChannels, setModalContent } = useContext(stateContext);
  const modalContent = {
    title: "Create New Channel",
    body: <ChannelForm />,
  };
  const toggleModal = () => {
    setChecked(false);
    setModalContent(modalContent);
  };
  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await getChannels();
      setChannels(response);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-5">
      <div className="flex items-center pb-3">
        <span className="grow text-lg font-bold text-primary">Channels</span>
        <label
          htmlFor="client-modal"
          className="btn-primary btn-sm btn"
          onClick={toggleModal}
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
