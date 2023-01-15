import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { stateContext } from "../../store/State";
import { loginUser } from "../../api/slack";
import EmailInput from "./input/EmailInput";
import PasswordInput from "./PasswordInput";

const FormLogin = () => {
  const { setClient, setHeaders } = useContext(stateContext);
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
      setClient(login.client);
      setHeaders(login.headers);
      navigate("/client");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-lg rounded border p-5">
      <h1 className="mb-5 text-xl font-bold">Login</h1>
      <EmailInput id="login_email" setEmail={setEmail} />
      <PasswordInput id="login_password" setPassword={setPassword} />
      {error && <p className="text-error">{error}</p>}
      <button className="btn mt-2">Submit</button>
    </form>
  );
};

export default FormLogin;
