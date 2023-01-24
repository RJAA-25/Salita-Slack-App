import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { stateContext } from "../../store/State";
import { channelDetails, getMessages } from "../../api/slack";
import { getLocal } from "../../helpers/localStorage";
import ChannelCard from "../../components/card/ChannelCard";
import ChatList from "../../components/list/ChatList";
import ChatForm from "../../components/form/ChatForm";
import ChannelSidebar from "../../components/navigation/sidebar/ChannelSidebar";

const Channel = () => {
  const {
    messages,
    details: { owner_id: ownerID, channel_members: channelMembers },
    channelID,
  } = useLoaderData();
  const [checked, setChecked] = useState(false);
  const [members, setMembers] = useState(channelMembers);
  const { client } = getLocal("salita");
  const { channels } = useContext(stateContext);
  const channel = channels.find((channel) => String(channel.id) === channelID);

  return (
    <>
      <div className="drawer drawer-end">
        <input
          id="channel-drawer"
          type="checkbox"
          checked={checked}
          onChange={() => setChecked((state) => !state)}
          className="drawer-toggle"
        />
        <div className="drawer-content flex h-full flex-col gap-2">
          <ChannelCard channel={channel} />
          <ChatList
            id={channelID}
            type="Channel"
            initial={messages}
            client={client}
            showUID={true}
          />
          <ChatForm
            id="channel-message"
            type="Channel"
            receiverID={channelID}
          />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="channel-drawer"
            className="drawer-overlay backdrop-blur-sm"
          ></label>
          <ChannelSidebar
            ownerID={ownerID}
            channelID={channelID}
            members={members}
            setChecked={setChecked}
            setMembers={setMembers}
          />
        </div>
      </div>
    </>
  );
};

export const channelLoader = async ({ params }) => {
  const { channelID } = params;
  const messages = await getMessages("Channel", channelID);
  const details = await channelDetails(channelID);
  return { messages, details, channelID };
};

export default Channel;
