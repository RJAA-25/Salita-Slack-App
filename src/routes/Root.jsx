import { Outlet, redirect } from "react-router-dom";
import Modal from "../components/utility/Modal";
import Container from "../components/wrapper/Container";
import { getLocal } from "../helpers/localStorage";

const Root = () => {
  console.log("Passing through Root");
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
  console.log("rootLoader running");
  const salita = getLocal("salita");
  return salita ? redirect("/client") : redirect("/login");
};

export const sessionLoader = () => {
  console.log("sessionLoader running");
  const salita = getLocal("salita");
  return salita ? redirect("/client") : null;
};

export default Root;
