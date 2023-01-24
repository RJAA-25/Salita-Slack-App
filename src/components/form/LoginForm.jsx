import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/slack";
import EmailInput from "./input/EmailInput";
import PasswordInput from "./input/PasswordInput";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const login = await loginUser({ email, password });
    if (login.error) {
      setError(login.error);
    } else {
      setError("");
      navigate("/client");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto h-fit w-full max-w-lg rounded border border-accent p-5 shadow-xl"
    >
      <h1 className="mb-5 text-2xl font-bold">Login</h1>
      <EmailInput id="login_email" setEmail={setEmail} />
      <PasswordInput id="login_password" setPassword={setPassword} />
      {error && <p className="text-error">{error}</p>}
      <p className="my-3 text-sm">
        Don't have an account?{" "}
        <Link to="/register" className="link text-accent">
          Register!
        </Link>
      </p>
      <button className="btn-accent btn mt-2 ml-auto block">Submit</button>
    </form>
  );
};

export default LoginForm;
