import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Channels from "./channels/Channels";
import DirectMessages from "./direct messages/DirectMessages";
import Profile from "./profile/Profile";

const ClientSidebar = (props) => {
  const { setChecked } = props;

  return (
    <div className="flex w-80 flex-col justify-between border bg-base-100 lg:py-5">
      <div className="grow overflow-y-auto p-5">
        <label htmlFor="client-drawer" className="btn lg:hidden">
          <Icon icon={faArrowLeft} />
        </label>
        <div className="divider lg:hidden"></div>
        <Channels setChecked={setChecked} />
        <DirectMessages setChecked={setChecked} />
      </div>
      <Profile />
    </div>
  );
};

export default ClientSidebar;
