import { createContext, useState } from "react";
import { removeLocal } from "../helpers/localStorage";

export const stateContext = createContext({});

export const StateProvider = (props) => {
  const [initialized, setInitialized] = useState(false);
  const [users, setUsers] = useState([]);
  const [channels, setChannels] = useState([]);
  const [dMUsers, setDMUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const logout = () => {
    removeLocal("salita");
    setInitialized(false);
    setUsers([]);
    setChannels([]);
    setDMUsers([]);
  };
  const initialState = {
    initialized,
    setInitialized,
    users,
    setUsers,
    channels,
    setChannels,
    dMUsers,
    setDMUsers,
    modal,
    setModal,
    modalContent,
    setModalContent,
    logout,
  };

  return (
    <stateContext.Provider value={initialState}>
      {props.children}
    </stateContext.Provider>
  );
};
