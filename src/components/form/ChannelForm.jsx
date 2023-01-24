import { useContext } from "react";
import { useState } from "react";
import { stateContext } from "../../store/State";
import { createChannel } from "../../api/slack";
import { useNavigate } from "react-router-dom";
import { getLocal } from "../../helpers/localStorage";
import TextInput from "./input/TextInput";
import SearchInput from "./input/SearchInput";
import UserList from "../list/UserList";
import SelectedList from "../list/SelectedList";

const ChannelForm = () => {
  const { users, setChannels, setModal, setModalContent } =
    useContext(stateContext);
  const { client } = getLocal("salita");
  const [ID, setID] = useState("");
  const [UID, setUID] = useState("");
  const [name, setName] = useState("");
  const [members, setMembers] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const filteredUsers = users.filter((user) => !members.includes(user.id));
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
    if (!name || error) return;
    const response = await createChannel({ name, user_ids: members });
    if (response.error) {
      setError(response.error);
    } else {
      handleClose();
      setChannels((state) => [...state, response.data]);
      navigate(`/client/channels/${response.data.id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <TextInput
        id="channel-name"
        name="Channel Name"
        validation={checkChannelName}
        setInput={setName}
        requestError={error}
        setRequestError={setError}
      />
      <SelectedList owner={client} members={members} setMembers={setMembers} />
      <SearchInput
        id="search-user"
        setID={setID}
        setUID={setUID}
        data={filteredUsers}
      />
      <div className="relative max-h-48 overflow-y-auto overflow-x-clip rounded-lg">
        {ID && <UserList title="ID" list={ID} handleClick={handleClick} />}
        {UID && <UserList title="UID" list={UID} handleClick={handleClick} />}
      </div>

      <div className="my-5 flex justify-end gap-3">
        <label
          htmlFor="client-modal"
          className="btn-secondary btn"
          onClick={handleClose}
        >
          Cancel
        </label>
        <button className="btn-accent btn" type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default ChannelForm;

function checkChannelName(value) {
  const input = value.trim();
  if (input.length === 0) return "Channel name is required";
  return input.length > 15 ? "Maximum of 15 characters" : "";
}
