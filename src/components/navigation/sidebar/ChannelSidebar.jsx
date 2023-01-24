import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import MemberList from "../../list/MemberList";
import { getLocal } from "../../../helpers/localStorage";
import { useContext } from "react";
import { stateContext } from "../../../store/State";
import MemberForm from "../../form/MemberForm";

const ChannelSidebar = (props) => {
  const { ownerID, channelID, members, setChecked, setMembers } = props;
  const { setModal, setModalContent } = useContext(stateContext);
  const { client } = getLocal("salita");
  const modalContent = {
    title: "Add Channel Members",
    body: (
      <MemberForm
        currentMembers={members}
        setCurrentMembers={setMembers}
        channelID={channelID}
      />
    ),
  };
  const toggleModal = () => {
    setModal(true);
    setModalContent(modalContent);
  };

  return (
    <div className="flex w-96 flex-col justify-between bg-base-100 lg:py-5">
      <div className="grow overflow-y-auto p-5">
        <div className="flex justify-between">
          {client.id === ownerID && (
            <button className="btn-accent btn" onClick={toggleModal}>
              <Icon icon={faUserPlus} />
            </button>
          )}
          <label htmlFor="channel-drawer" className="btn-secondary btn">
            <Icon icon={faArrowRight} />
          </label>
        </div>
        <div className="divider"></div>
        <MemberList
          ownerID={ownerID}
          members={members}
          setChecked={setChecked}
        />
      </div>
    </div>
  );
};

export default ChannelSidebar;
