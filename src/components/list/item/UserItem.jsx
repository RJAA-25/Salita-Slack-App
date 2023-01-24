const UserItem = (props) => {
  const { user, action } = props;
  const handleClick = () => {
    action(user);
  };

  return (
    <li className="border border-secondary" onClick={handleClick}>
      <div className="flex flex-col items-start lg:flex-row lg:items-center lg:justify-between">
        <span>{user.uid}</span>
        <span className="text-sm font-bold text-accent"># {user.id}</span>
      </div>
    </li>
  );
};

export default UserItem;
