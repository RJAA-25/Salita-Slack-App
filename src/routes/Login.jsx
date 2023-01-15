import React from "react";
import Header from "../components/brand/Header";
import FormLogin from "../components/form/FormLogin";
import Content from "../components/wrapper/Content";

const Login = () => {
  return (
    <>
      <Header />
      <Content>
        <FormLogin />
      </Content>
    </>
  );
};

export default Login;
