import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { stateContext } from "../../store/State";
import UserList from "../list/UserList";
import SearchInput from "./input/SearchInput";

const UserForm = () => {
  const { users, setModal, setModalContent } = useContext(stateContext);
  const [ID, setID] = useState("");
  const [UID, setUID] = useState("");
  const navigate = useNavigate();
  const handleClick = (user) => {
    setTimeout(() => {
      setModalContent({});
      setModal(false);
    }, 250);
    navigate(`/client/messages/${user.id}`);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full">
      <SearchInput
        id="search-user"
        setID={setID}
        setUID={setUID}
        data={users}
      />
      <div className="relative max-h-80 overflow-y-auto overflow-x-clip rounded-lg bg-base-200">
        {ID && <UserList title="ID" list={ID} handleClick={handleClick} />}
        {UID && <UserList title="UID" list={UID} handleClick={handleClick} />}
      </div>
    </form>
  );
};

export default UserForm;
