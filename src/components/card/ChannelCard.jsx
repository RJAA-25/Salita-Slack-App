import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const ChannelCard = (props) => {
  const { channel } = props;

  return (
    <div className="flex items-center gap-3 rounded border p-2 lg:p-5">
      <div className="w-12 overflow-clip rounded-full bg-base-300 lg:w-14">
        <img
          src={`https://api.dicebear.com/5.x/icons/svg?seed=${channel.id}`}
          alt="avatar"
        />
      </div>
      <div className="grow">
        <span className="block text-lg font-bold">{channel.name}</span>
        <span className="text-secondary"># {channel.id}</span>
      </div>
      <label htmlFor="channel-drawer" className="btn-primary drawer-button btn">
        <Icon icon={faUsers} />
      </label>
    </div>
  );
};

export default ChannelCard;
