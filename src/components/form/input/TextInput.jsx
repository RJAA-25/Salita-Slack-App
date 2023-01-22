import { useState, useEffect } from "react";

const TextInput = (props) => {
  const {
    id,
    name,
    validation = null,
    setInput,
    requestError,
    setRequestError,
  } = props;
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
    if (requestError) {
      setStatus("invalid");
      setError(requestError);
      return;
    }
    if (validation && touched) {
      const error = validation(value);
      if (error) {
        setStatus("invalid");
        setError(error);
        setInput("");
      } else {
        setStatus("valid");
        setError("");
        setInput(value);
      }
    } else {
      setInput(value);
    }
  }, [value, requestError]);

  return (
    <div className="form-control my-5">
      <label htmlFor={id} className="mb-2 text-lg">
        {name}
      </label>
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={(e) => {
          if (!touched) setTouched(true);
          setRequestError("");
          setValue(e.target.value);
        }}
        className={`input-bordered input w-full ${style[status]}`}
      />
      {error && <span className="mt-2 text-sm text-error">{error}</span>}
    </div>
  );
};

export default TextInput;
