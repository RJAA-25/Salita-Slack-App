import { useEffect, useState } from "react";
import { getMessages } from "../../api/slack";
import ChatItem from "./item/ChatItem";

const ChatList = (props) => {
  const { id, type, initial, client } = props;
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
    <ul className="mb-16 grow overflow-y-auto border py-5">
      {messages.map((message) => (
        <ChatItem
          key={message.id}
          message={message}
          client={client}
          // uid={true}
        />
      ))}
    </ul>
  );
};

export default ChatList;
