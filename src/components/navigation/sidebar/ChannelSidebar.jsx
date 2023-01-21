import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ChannelSidebar = () => {
  return (
    <div className="flex w-80 flex-col justify-between border bg-base-100 lg:py-5">
      <div className="grow overflow-y-auto p-5">
        <span className="mb-5 block text-xl font-bold">Channel Members</span>
        <div className="flex justify-between">
          <button className="btn">
            <Icon icon={faUserPlus} />
          </button>
          <label htmlFor="channel-drawer" className="btn">
            <Icon icon={faArrowRight} />
          </label>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default ChannelSidebar;
