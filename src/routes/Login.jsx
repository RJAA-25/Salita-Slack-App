import Header from "../components/brand/Header";
import LoginForm from "../components/form/LoginForm";
import Content from "../components/wrapper/Content";

const Login = () => {
  return (
    <>
      <Content>
        <Header />
        <div className="my-5 flex grow">
          <div className="hidden grow self-center lg:block">
            <img src="/images/login.png" alt="login" />
          </div>
          <LoginForm />
        </div>
      </Content>
    </>
  );
};

export default Login;
