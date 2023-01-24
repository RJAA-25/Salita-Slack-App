import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/slack";
import EmailInput from "./input/EmailInput";
import PasswordInput from "./input/PasswordInput";

const RegisterForm = () => {
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
      navigate("/client");
    }
  };
  useEffect(() => {
    Object.values(data).includes("") ? setValid(false) : setValid(true);
  }, [data]);

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto h-fit w-full max-w-lg rounded border border-accent p-5 shadow-xl"
    >
      <h1 className="mb-5 text-2xl font-bold">Register</h1>
      <EmailInput id="register_email" validate={true} setEmail={setEmail} />
      <PasswordInput
        id="register_password"
        confirm={true}
        setPassword={setPassword}
        setConfirmation={setConfirmation}
      />
      {error && <p className="text-error">{error}</p>}
      <p className="my-3 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="link text-accent">
          Login!
        </Link>
      </p>
      <button disabled={!valid} className="btn-accent btn ml-auto block">
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
