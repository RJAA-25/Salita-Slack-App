import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "../routes/Root";
import Error from "../components/errors/Error";
import Login from "../routes/Login";
import Register from "../routes/Register";
import Client from "../routes/Client";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/client" element={<Client />} />
    </Route>
  )
);

export default router;
