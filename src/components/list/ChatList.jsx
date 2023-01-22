import { useEffect, useState } from "react";
import { getMessages } from "../../api/slack";
import ChatItem from "./item/ChatItem";

const ChatList = (props) => {
  const { id, type, initial, client, showUID = false } = props;
  const [messages, setMessages] = useState(initial);
  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await getMessages(type, id);
      setMessages(response);
    }, 1000);

    return () => {
      console.log("Clear Interval");
      clearInterval(interval);
    };
  }, []);

  return (
    <ul className="mb-3 grow overflow-y-auto rounded border py-5">
      {messages.map((message) => (
        <ChatItem
          key={message.id}
          message={message}
          client={client}
          showUID={showUID}
        />
      ))}
    </ul>
  );
};

export default ChatList;
