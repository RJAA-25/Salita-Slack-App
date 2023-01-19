import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Content from "../../wrapper/Content";
import Channels from "./channels/Channels";
import DirectMessages from "./direct messages/DirectMessages";
import Profile from "./profile/Profile";

const Sidebar = (props) => {
  const { setChecked } = props;

  return (
    <div className="flex w-80 flex-col justify-between border bg-base-100">
      <Content>
        <label
          htmlFor="client-drawer"
          className="btn mt-5 border-b-2 lg:hidden"
        >
          <Icon icon={faArrowLeft} />
        </label>
        <div className="divider lg:hidden"></div>
        <Channels setChecked={setChecked} />
        <DirectMessages setChecked={setChecked} />
      </Content>
      <Profile />
    </div>
  );
};

export default Sidebar;
