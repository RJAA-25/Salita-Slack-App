import { createContext, useState } from "react";
import { getLocal, removeLocal } from "../helpers/localStorage";

export const stateContext = createContext({});

export const StateProvider = (props) => {
  const [client, setClient] = useState(getLocal("client") || null);
  const [headers, setHeaders] = useState(getLocal("headers") || null);
  const [users, setUsers] = useState([]);
  const [channels, setChannels] = useState([]);
  const [dMessages, setDMessages] = useState([]);
  const [modal, setModal] = useState(false);
  const logout = () => {
    removeLocal("client");
    removeLocal("headers");
    setClient(null);
    setHeaders(null);
    setUsers([]);
    setChannels([]);
    setDMessages([]);
  };
  const initialState = {
    client,
    setClient,
    headers,
    setHeaders,
    users,
    setUsers,
    channels,
    setChannels,
    dMessages,
    setDMessages,
    modal,
    setModal,
    logout,
  };

  return (
    <stateContext.Provider value={initialState}>
      {props.children}
    </stateContext.Provider>
  );
};
