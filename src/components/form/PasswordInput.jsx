import { useEffect, useState } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const PasswordInput = (props) => {
  const { id, confirm, setPassword, setConfirmation } = props;
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [status1, setStatus1] = useState("neutral");
  const [status2, setStatus2] = useState("neutral");
  const [touched, setTouched] = useState(false);
  const [toggle, setToggle] = useState(false);
  const style = {
    invalid: "input-error",
    neutral: "",
    valid: "input-success",
  };
  useEffect(() => {
    if (confirm && touched) {
      const [error1, error2] = checkPassword(value1, value2);
      if (error1) {
        setStatus1("invalid");
        setError1(error1);
        setPassword("");
      } else {
        setStatus1("valid");
        setError1("");
        setPassword(value1);
      }
      if (error2) {
        setStatus1("invalid");
        setStatus2("invalid");
        setError2(error2);
        setConfirmation("");
      } else {
        if (value1 !== value2) {
          setStatus2("neutral");
          setError2("");
          setConfirmation("");
        } else {
          setStatus2("valid");
          setError2("");
          setConfirmation(value2);
        }
      }
    } else {
      setPassword(value1);
    }
  }, [value1, value2]);

  return (
    <>
      <div className="form-control my-5">
        <label htmlFor={id} className="mb-2 text-lg">
          Password
        </label>
        <div className="input-group">
          <input
            type={toggle ? "text" : "password"}
            name={id}
            id={id}
            value={value1}
            onChange={(e) => {
              if (!touched) setTouched(true);
              const current = e.target.value;
              current.slice(-1) !== " " ? setValue1(current) : null;
            }}
            className={`input-bordered input w-full ${style[status1]}`}
          />
          <span
            onClick={() => setToggle((state) => !state)}
            className="hover:cursor-pointer"
          >
            <Icon icon={toggle ? faEyeSlash : faEye} />
          </span>
        </div>
        {error1 && <span className="mt-2 text-sm text-error">{error1}</span>}
      </div>

      {confirm && (
        <div className="form-control my-5">
          <label htmlFor={`${id}_confirmation`} className="mb-2 text-lg">
            Password Confirmation
          </label>
          <div className="input-group">
            <input
              type={toggle ? "text" : "password"}
              name={`${id}_confirmation`}
              id={`${id}_confirmation`}
              value={value2}
              onChange={(e) => {
                if (!touched) setTouched(true);
                const current = e.target.value;
                current.slice(-1) !== " " ? setValue2(current) : null;
              }}
              className={`input-bordered input w-full ${style[status2]}`}
            />
            <span
              onClick={() => setToggle((state) => !state)}
              className="hover:cursor-pointer"
            >
              <Icon icon={toggle ? faEyeSlash : faEye} />
            </span>
          </div>
          {error2 && <span className="mt-2 text-sm text-error">{error2}</span>}
        </div>
      )}
    </>
  );
};

export default PasswordInput;

function checkPassword(value1, value2) {
  const input1 = value1.trim();
  const input2 = value2.trim();
  if (input1.length === 0) return ["Password is required"];
  if (input1.length < 6)
    return ["Password is too short (minimum 6 characters)"];
  if (value2) {
    return input2 !== input1
      ? ["", "Password confirmation does not match password"]
      : ["", ""];
  }
  return [""];
}
