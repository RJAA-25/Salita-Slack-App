import { useState } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { sendMessage } from "../../api/slack";

const ChatForm = (props) => {
  const { id, userID } = props;
  const [chat, setChat] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage("User", userID, chat);
    setChat("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="absolute left-0 bottom-0 flex w-full items-center gap-3 border px-5 py-3"
    >
      <textarea
        name={id}
        id={id}
        value={chat}
        className="textarea-bordered textarea h-14 w-full text-base"
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            handleSubmit(e);
          }
        }}
        onChange={(e) => setChat(e.target.value)}
      ></textarea>
      <button type="submit" className="btn">
        <Icon icon={faMessage} className="lg:text-lg" />
      </button>
    </form>
  );
};

export default ChatForm;
