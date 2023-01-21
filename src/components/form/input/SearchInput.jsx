import { useState, useEffect } from "react";

const SearchInput = (props) => {
  const { id, setID, setUID, data } = props;
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("neutral");
  const style = {
    invalid: "input-error",
    neutral: "",
    valid: "input-success",
  };
  useEffect(() => {
    if (value.trim().length === 0) {
      setID("");
      setUID("");
      setError(false);
      setStatus("neutral");
      return;
    }
    const [id, uid] = checkUser(value, data);
    if (id) {
      setID(id);
      setError(false);
      setStatus("valid");
    } else {
      setID("");
    }

    if (uid) {
      setUID(uid);
      setError(false);
      setStatus("valid");
    } else {
      setUID("");
    }

    if (!id && !uid) {
      setID("");
      setUID("");
      setError(true);
      setStatus("invalid");
    }
  }, [value]);

  return (
    <div className="form-control my-5">
      <input
        type="search"
        name={id}
        id={id}
        value={value}
        placeholder="ID or UID"
        onChange={(e) => setValue(e.target.value)}
        className={`input-bordered input w-full ${style[status]}`}
      />
      {error && <span className="mt-2 text-sm text-error">No user found</span>}
    </div>
  );
};

export default SearchInput;

function checkUser(value, data) {
  let id, uid;
  const filteredIDs = data.filter((user) =>
    String(user.id).includes(value.toLowerCase())
  );
  const filteredUIDs = data.filter((user) =>
    user.uid.includes(value.toLowerCase())
  );
  filteredIDs.length > 0 ? (id = filteredIDs) : (id = "");
  filteredUIDs.length > 0 ? (uid = filteredUIDs) : (uid = "");
  return [id, uid];
}
