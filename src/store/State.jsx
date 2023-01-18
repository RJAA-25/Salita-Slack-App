import { createContext, useState } from "react";

const localClient = JSON.parse(localStorage.getItem("client"));
const localHeaders = JSON.parse(localStorage.getItem("headers"));

export const stateContext = createContext({});

export const StateProvider = (props) => {
  const [client, setClient] = useState(localClient || null);
  const [headers, setHeaders] = useState(localHeaders || null);
  const [users, setUsers] = useState([]);
  const [channels, setChannels] = useState([]);
  const [dMessages, setDMessages] = useState([]);
  const [modal, setModal] = useState(false);
  const logout = () => {
    localStorage.removeItem("client");
    localStorage.removeItem("headers");
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
