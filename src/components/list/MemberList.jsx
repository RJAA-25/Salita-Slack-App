import { useNavigate } from "react-router-dom";
import MemberItem from "./item/MemberItem";

const MemberList = (props) => {
  const { ownerID, members, setChecked } = props;
  const navigate = useNavigate();
  const handleClick = (user) => {
    setChecked(false);
    navigate(`/client/messages/${user.id}`);
  };
  return (
    <>
      <span className="mb-5 block text-xl font-bold">Channel Members</span>
      <ul className="menu w-full">
        {members.map((member) => (
          <MemberItem
            key={member.id}
            ownerID={ownerID}
            memberID={member.user_id}
            action={handleClick}
          />
        ))}
      </ul>
    </>
  );
};

export default MemberList;
