import { useState } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { sendMessage } from "../../api/slack";

const ChatForm = (props) => {
  const { id, type, receiverID } = props;
  const [chat, setChat] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(type, receiverID, chat);
    setChat("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="relative bottom-0 left-0 flex w-full items-center gap-2 p-1"
    >
      <textarea
        name={id}
        id={id}
        value={chat}
        className="textarea-bordered textarea-accent textarea h-14 w-full text-base"
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            handleSubmit(e);
          }
        }}
        onChange={(e) => setChat(e.target.value)}
      ></textarea>
      <button type="submit" className="btn-primary btn">
        <Icon icon={faMessage} className="lg:text-lg" />
      </button>
    </form>
  );
};

export default ChatForm;
