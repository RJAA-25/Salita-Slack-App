import Header from "../components/brand/Header";
import RegisterForm from "../components/form/RegisterForm";
import Content from "../components/wrapper/Content";

const Register = () => {
  return (
    <>
      <Content>
        <Header />
        <div className="my-5 flex grow">
          <div className="hidden grow self-center lg:block">
            <img src="src/assets/images/register.png" alt="register" />
          </div>
          <RegisterForm />
        </div>
      </Content>
    </>
  );
};

export default Register;
