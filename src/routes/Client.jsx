import { useContext, useEffect } from "react";
import { Outlet, redirect, useLoaderData } from "react-router-dom";
import { initializeClient } from "../api/slack";
import Header from "../components/brand/Header";
import { getLocal } from "../helpers/localStorage";
import { stateContext } from "../store/State";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Content from "../components/wrapper/Content";

const Client = () => {
  const { users, channels, dMessages } = useLoaderData();
  const { setUsers, setChannels, setDMessages } = useContext(stateContext);
  console.log("Client rendered");
  useEffect(() => {
    setUsers(users);
    setChannels(channels);
    setDMessages(dMessages);
  }, []);

  return (
    <>
      <div className="drawer-mobile drawer">
        <input id="client-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="flex items-center px-5">
            <label
              htmlFor="client-drawer"
              className="btn-primary btn lg:hidden"
            >
              <Icon icon={faBars} />
            </label>
            <div className="grow">
              <Header />
            </div>
          </div>
          <Content>
            <Outlet />
          </Content>
        </div>
        <div className="drawer-side">
          <label htmlFor="client-drawer" className="drawer-overlay"></label>
          <div className="flex w-80 flex-col justify-between border bg-base-100 p-5">
            <div>Some items</div>
            <div>Account</div>
          </div>
          {/* <ul className="menu w-80 border bg-base-100 p-4 text-base-content">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul> */}
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
