import { Outlet, redirect } from "react-router-dom";
import Modal from "../components/utility/Modal";
import Container from "../components/wrapper/Container";
import { getLocal } from "../helpers/localStorage";

const Root = () => {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
      <Modal />
    </>
  );
};

export const rootLoader = () => {
  const salita = getLocal("salita");
  return salita ? redirect("/client") : redirect("/login");
};

export const sessionLoader = () => {
  const salita = getLocal("salita");
  return salita ? redirect("/client") : null;
};

export default Root;
