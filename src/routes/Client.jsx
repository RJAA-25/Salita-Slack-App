import { useContext, useEffect, useState } from "react";
import { Outlet, redirect, useLoaderData } from "react-router-dom";
import { initializeClient } from "../api/slack";
import ClientHeader from "../components/brand/ClientHeader";
import Sidebar from "../components/navigation/sidebar/Sidebar";
import Content from "../components/wrapper/Content";
import { getLocal } from "../helpers/localStorage";
import { stateContext } from "../store/State";

const Client = () => {
  const { users, channels, dMessages } = useLoaderData();
  const { setUsers, setChannels, setDMessages } = useContext(stateContext);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setUsers(users);
    setChannels(channels);
    setDMessages(dMessages);
  }, []);

  return (
    <>
      <div className="drawer-mobile drawer">
        <input
          id="client-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={checked}
          onChange={() => setChecked((state) => !state)}
        />
        <div className="drawer-content flex flex-col">
          <Content>
            <ClientHeader />
            <Outlet />
          </Content>
        </div>
        <div className="drawer-side">
          <label htmlFor="client-drawer" className="drawer-overlay"></label>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export const clientLoader = async () => {
  const headers = getLocal("headers");
  if (headers) {
    const initClient = await initializeClient();
    return { ...initClient };
  } else return redirect("/login");
};

export default Client;
