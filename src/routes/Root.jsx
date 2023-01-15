import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Container from "../components/wrapper/Container";
import { stateContext } from "../store/State";

const Root = () => {
  const state = useContext(stateContext);
  const navigate = useNavigate();
  // useEffect(() => {
  //   state.client ? navigate("/client") : navigate("/login");
  // }, []);

  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Root;
