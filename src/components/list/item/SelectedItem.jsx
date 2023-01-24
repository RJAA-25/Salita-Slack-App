import { useContext } from "react";
import { stateContext } from "../../../store/State";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SelectedItem = (props) => {
  const { memberID, action } = props;
  const { users } = useContext(stateContext);
  const user = users.find((user) => user.id === memberID);
  return (
    <li className="w-full border border-base-300">
      <div className="flex w-full">
        <div className="flex grow flex-col items-start lg:flex-row lg:items-center lg:justify-between">
          <span>{user.uid}</span>
          <span className="text-sm font-bold text-accent"># {user.id}</span>
        </div>
        <button
          className="btn-error btn-sm btn"
          onClick={() => action(memberID)}
        >
          <Icon icon={faXmark} />
        </button>
      </div>
    </li>
  );
};

export default SelectedItem;
