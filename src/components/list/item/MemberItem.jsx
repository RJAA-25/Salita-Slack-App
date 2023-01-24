import { useContext } from "react";
import { stateContext } from "../../../store/State";

const MemberItem = (props) => {
  const { ownerID, memberID, action } = props;
  const { users } = useContext(stateContext);
  const user = users.find((user) => user.id === memberID);
  const handleClick = () => {
    action(user);
  };

  return (
    <li className="hover-bordered" onClick={handleClick}>
      <div className="flex flex-col items-start lg:flex-row lg:items-center lg:justify-between">
        <span>
          {user.uid} {user.id === ownerID ? "(Owner)" : ""}
        </span>
        <span className="text-sm font-bold text-accent"># {user.id}</span>
      </div>
    </li>
  );
};

export default MemberItem;
