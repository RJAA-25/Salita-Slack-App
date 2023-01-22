import SelectedItem from "./item/SelectedItem";

const SelectedList = (props) => {
  const { owner = null, members, setMembers } = props;
  const handleClick = (memberID) => {
    const filteredMembers = members.filter((id) => id !== memberID);
    setMembers(filteredMembers);
  };

  return (
    <div className="my-5">
      <span className="mb-2 block text-lg">Channel Members</span>
      <ul className="menu max-h-48 overflow-y-auto">
        {owner && (
          <li className="bg-base-300">
            <div className="flex flex-col items-start lg:flex-row lg:items-center lg:justify-between">
              <span>
                {owner.uid} <span className="font-light">(Owner)</span>
              </span>
              <span className="text-sm font-bold text-secondary">
                # {owner.id}
              </span>
            </div>
          </li>
        )}
        {members.map((member) => (
          <SelectedItem key={member} memberID={member} action={handleClick} />
        ))}
      </ul>
    </div>
  );
};

export default SelectedList;
