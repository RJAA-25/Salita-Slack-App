import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/slack";
import { stateContext } from "../../store/State";
import EmailInput from "./input/EmailInput";
import PasswordInput from "./input/PasswordInput";

const FormRegister = () => {
  const { setClient, setHeaders } = useContext(stateContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");
  const [valid, setValid] = useState(false);
  const data = { email, password, "password_confirmation": confirmation };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const register = await registerUser(data);
    if (register.error) {
      setError(register.error);
    } else {
      setError("");
      setClient(register.client);
      setHeaders(register.headers);
      navigate("/client");
    }
  };
  useEffect(() => {
    Object.values(data).includes("") ? setValid(false) : setValid(true);
  }, [data]);

  return (
    <form onSubmit={handleSubmit} className="max-w-lg rounded border p-5">
      <h1 className="mb-5 text-2xl font-bold">Register</h1>
      <EmailInput id="register_email" validate={true} setEmail={setEmail} />
      <PasswordInput
        id="register_password"
        confirm={true}
        setPassword={setPassword}
        setConfirmation={setConfirmation}
      />
      {error && <p className="text-error">{error}</p>}
      <button disabled={!valid} className="btn ml-auto block">
        Submit
      </button>
    </form>
  );
};

export default FormRegister;
