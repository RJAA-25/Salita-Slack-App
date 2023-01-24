import { getLocal } from "../../helpers/localStorage";

const MessageCard = (props) => {
  const { user } = props;
  const { client } = getLocal("salita");

  return (
    <div className="flex items-center gap-3 rounded bg-secondary p-2 lg:p-5">
      <div className="w-12 overflow-clip rounded-full bg-info lg:w-14">
        <img
          src={`https://api.dicebear.com/5.x/personas/svg?seed=${user.id}`}
          alt="avatar"
        />
      </div>
      <div>
        <span className="block text-lg font-bold text-neutral">
          {user.uid}{" "}
          {user.id === client.id ? (
            <span className="font-light">(You)</span>
          ) : (
            ""
          )}
        </span>
        <span className="text-sm font-bold text-primary"># {user.id}</span>
      </div>
    </div>
  );
};

export default MessageCard;
