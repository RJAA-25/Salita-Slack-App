import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import { initializeClient } from "../api/slack";
import { stateContext } from "../store/State";
import ClientHeader from "../components/brand/ClientHeader";
import Sidebar from "../components/navigation/sidebar/Sidebar";
import Content from "../components/wrapper/Content";
import Loading from "../components/utility/Loading";
import LoadingContent from "../components/utility/LoadingContent";

const Client = () => {
  const { initialized, setInitialized, setUsers, setChannels, setDMUsers } =
    useContext(stateContext);
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();
  const initialize = async () => {
    const { users, channels, dMUsers } = await initializeClient();
    setInitialized(true);
    setUsers(users);
    setChannels(channels);
    setDMUsers(dMUsers);
  };
  useEffect(() => {
    if (!initialized) initialize();
  }, []);

  return (
    <>
      {initialized ? (
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
              {navigation.state === "loading" ? <LoadingContent /> : <Outlet />}
            </Content>
          </div>
          <div className="drawer-side">
            <label htmlFor="client-drawer" className="drawer-overlay"></label>
            <Sidebar setChecked={setChecked} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Client;
