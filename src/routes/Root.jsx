import React, { useContext, useEffect } from "react";
import { Outlet, redirect, useNavigation } from "react-router-dom";
import Loading from "../components/utility/Loading";
import Modal from "../components/utility/Modal";
import Container from "../components/wrapper/Container";
import { getLocal } from "../helpers/localStorage";

const Root = () => {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        {navigation.state === "loading" ? <Loading /> : <Outlet />}
      </Container>
      <Modal />
    </>
  );
};

export const rootLoader = () => {
  console.log("rootLoader running");
  const client = getLocal("client");
  // return client ? redirect("/client/home") : redirect("/login");
  return client ? redirect("/client") : redirect("/login");
};

export const sessionLoader = () => {
  console.log("sessionLoader running");
  const client = getLocal("client");
  // return client ? redirect("/client/home") : null;
  return client ? redirect("/client") : null;
};

export default Root;
