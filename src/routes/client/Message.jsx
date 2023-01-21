import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { getMessages } from "../../api/slack";
import { getLocal } from "../../helpers/localStorage";
import { stateContext } from "../../store/State";
import MessageCard from "../../components/card/MessageCard";
import ChatForm from "../../components/form/ChatForm";
import ChatList from "../../components/list/ChatList";

const Message = () => {
  const { messages, userID } = useLoaderData();
  const { client } = getLocal("salita");
  const { users } = useContext(stateContext);
  const user = users.find((user) => String(user.id) === userID);

  return (
    <>
      <MessageCard user={user} />
      <ChatList id={userID} type="User" initial={messages} client={client} />
      <ChatForm id="user-message" type="User" receiverID={userID} />
    </>
  );
};

export const messageLoader = async ({ params }) => {
  const { userID } = params;
  const messages = await getMessages("User", userID);
  return { messages, userID };
};

export default Message;
