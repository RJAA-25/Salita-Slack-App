import UserItem from "./item/UserItem";

const UserList = (props) => {
  const { title, list, handleClick } = props;
  return (
    <>
      <span className="sticky top-0 z-10 block bg-accent py-3 px-5 text-xl font-bold text-white">
        {title}
      </span>
      <ul className="menu">
        {list.map((user) => (
          <UserItem key={user.id} user={user} action={handleClick} />
        ))}
      </ul>
    </>
  );
};

export default UserList;
