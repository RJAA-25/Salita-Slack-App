import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root, { rootLoader, sessionLoader } from "../routes/Root";
import Error from "../components/errors/Error";
import Login from "../routes/Login";
import Register from "../routes/Register";
import Client from "../routes/Client";
import Landing from "../routes/Landing";
import Index from "../routes/client/Index";
import Channel, { channelLoader } from "../routes/client/Channel";
import Message, { messageLoader } from "../routes/client/Message";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route index element={<Landing />} loader={rootLoader} />
      <Route path="login" element={<Login />} loader={sessionLoader} />
      <Route path="register" element={<Register />} loader={sessionLoader} />
      <Route path="client" element={<Client />}>
        <Route index element={<Index />} />
        <Route
          path="channels/:channelID"
          element={<Channel />}
          loader={channelLoader}
        />
        <Route
          path="messages/:userID"
          element={<Message />}
          loader={messageLoader}
        />
      </Route>
    </Route>
  )
);

export default router;
