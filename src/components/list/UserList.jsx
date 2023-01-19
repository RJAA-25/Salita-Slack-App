import React from "react";
import { Link } from "react-router-dom";

const UserList = (props) => {
  const { title, list } = props;
  const show = list;
  return (
    <>
      <span className="sticky top-0 z-10 block bg-base-300 py-3 px-5 text-xl font-bold">
        {title}
      </span>
      <ul className="menu w-full">
        {show.map((user) => (
          <li key={user.id} className="hover-bordered border border-base-300">
            <Link>
              <div className="flex w-full flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                <span>{user.uid}</span>
                <span className="text-sm font-bold text-secondary">
                  # {user.id}
                </span>
              </div>
              {/* <div className="flex flex-col">
                <span className="grow truncate">{user.uid}</span>
                <span># {user.id}</span>
              </div> */}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
