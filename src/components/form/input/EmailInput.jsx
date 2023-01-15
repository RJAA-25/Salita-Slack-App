import { useEffect, useState } from "react";

const EmailInput = (props) => {
  const { id, setEmail, validate = false } = props;
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState("neutral");
  const style = {
    invalid: "input-error",
    neutral: "",
    valid: "input-success",
  };
  useEffect(() => {
    if (validate && touched) {
      const error = checkEmail(value);
      if (error) {
        setStatus("invalid");
        setError(error);
        setEmail("");
      } else {
        setStatus("valid");
        setError("");
        setEmail(value);
      }
    } else {
      setEmail(value);
    }
  }, [value]);

  return (
    <div className="form-control my-5">
      <label htmlFor={id} className="mb-2 text-lg">
        Email
      </label>
      <input
        type="email"
        name={id}
        id={id}
        value={value}
        onChange={(e) => {
          if (!touched) setTouched(true);
          setValue(e.target.value);
        }}
        className={`input-bordered input w-full ${style[status]}`}
      />
      {error && <span className="mt-2 text-sm text-error">{error}</span>}
    </div>
  );
};

export default EmailInput;

function checkEmail(value) {
  const input = value.trim();
  if (input.length === 0) return "Email is required";
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !regex.test(input) ? "Email format is invalid" : "";
}
