import React, { useState, useContext } from "react";
import { stateContext } from "../../store/State";
import UserList from "../list/UserList";
import SearchInput from "./input/SearchInput";

const UserForm = () => {
  const { users } = useContext(stateContext);
  const [ID, setID] = useState("");
  const [UID, setUID] = useState("");
  const filteredIDs = users.filter((user) =>
    String(user.id).includes(ID.toLowerCase())
  );
  const filteredUIDs = users.filter((user) =>
    user.uid.includes(UID.toLowerCase())
  );
  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full">
      <SearchInput
        id="search-user"
        setID={setID}
        setUID={setUID}
        data={users}
      />
      <div className="relative max-h-80 overflow-y-auto overflow-x-clip rounded-lg bg-base-200">
        {ID && <UserList title="ID" list={filteredIDs} />}
        {UID && <UserList title="UID" list={filteredUIDs} />}
      </div>
    </form>
  );
};

export default UserForm;
