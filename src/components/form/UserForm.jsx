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
    setModal(false);
    setTimeout(() => {
      setModalContent({});
    }, 250);
    navigate(`/client/messages/${user.id}`);
  };
  const handleClose = () => {
    setTimeout(() => {
      setModalContent({});
      setModal(false);
    }, 250);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="w-full">
        <SearchInput
          id="search-user"
          setID={setID}
          setUID={setUID}
          data={users}
        />
        <div className="relative max-h-80 overflow-y-auto overflow-x-clip rounded-lg">
          {ID || UID ? (
            <>
              {ID && (
                <UserList title="ID" list={ID} handleClick={handleClick} />
              )}
              {UID && (
                <UserList title="UID" list={UID} handleClick={handleClick} />
              )}
            </>
          ) : (
            <img
              src="/images/search.png"
              alt="search"
              className="mx-auto max-h-80"
            />
          )}
        </div>
        <div className="my-5 text-right">
          <label
            htmlFor="client-modal"
            className="btn-secondary btn"
            onClick={handleClose}
          >
            Cancel
          </label>
        </div>
      </form>
    </>
  );
};

export default UserForm;
