import React from "react";

const MessageCard = (props) => {
  const { user } = props;
  return (
    <div className="flex items-center gap-3 rounded border p-2 lg:p-5">
      <div className="w-12 overflow-clip rounded-full bg-base-300 lg:w-14">
        <img
          src={`https://api.dicebear.com/5.x/personas/svg?seed=${user.id}`}
          alt="avatar"
        />
      </div>
      <div>
        <span className="block text-lg font-bold">{user.uid}</span>
        <span className="text-secondary"># {user.id}</span>
      </div>
    </div>
  );
};

export default MessageCard;
