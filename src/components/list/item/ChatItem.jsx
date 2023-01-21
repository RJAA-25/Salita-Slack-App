import { useState } from "react";
import { formatDateTime } from "../../../helpers/dateTime";

const ChatItem = (props) => {
  const {
    message: { body, created_at, sender },
    client,
    showUID,
  } = props;
  const [toggle, setToggle] = useState(false);

  return (
    <li
      className={`chat ${sender.id === client.id ? "chat-end" : "chat-start"}`}
    >
      {showUID && <div className="chat-header p-1">{sender.uid}</div>}
      <div
        className={`chat-bubble hover:cursor-pointer ${
          sender.id === client.id ? "bg-neutral" : "bg-base-300"
        }`}
        onClick={() => setToggle((state) => !state)}
      >
        {body}
      </div>
      {toggle && (
        <div className="chat-footer p-1 opacity-50">
          {formatDateTime(created_at)}
        </div>
      )}
    </li>
  );
};

export default ChatItem;
