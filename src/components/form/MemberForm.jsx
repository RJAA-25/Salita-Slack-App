import { useContext, useState } from "react";
import { stateContext } from "../../store/State";
import SelectedList from "../list/SelectedList";
import SearchInput from "./input/SearchInput";
import UserList from "../list/UserList";
import { addMembers } from "../../api/slack";

const MemberForm = (props) => {
  const { channelID, currentMembers, setCurrentMembers } = props;
  const { users, setModal, setModalContent } = useContext(stateContext);
  const [ID, setID] = useState("");
  const [UID, setUID] = useState("");
  const [members, setMembers] = useState([]);
  const currentIDs = currentMembers.reduce(
    (acc, cur) => [...acc, cur.user_id],
    []
  );
  const filteredUsers = users.filter((user) => !currentIDs.includes(user.id));
  const handleClick = (user) => {
    setID("");
    setUID("");
    setMembers([...members, user.id]);
  };
  const handleClose = () => {
    setTimeout(() => {
      setModalContent({});
      setModal(false);
    }, 250);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addMembers(channelID, members);
    setCurrentMembers(response.data);
    handleClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectedList members={members} setMembers={setMembers} />
      <SearchInput
        id="search-user"
        setID={setID}
        setUID={setUID}
        data={filteredUsers}
      />
      <div className="relative max-h-48 overflow-y-auto overflow-x-clip rounded-lg bg-base-200">
        {ID && <UserList title="ID" list={ID} handleClick={handleClick} />}
        {UID && <UserList title="UID" list={UID} handleClick={handleClick} />}
      </div>

      <div className="my-5 flex justify-end gap-3">
        <label htmlFor="client-modal" className="btn" onClick={handleClose}>
          Cancel
        </label>
        <button className="btn" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default MemberForm;
