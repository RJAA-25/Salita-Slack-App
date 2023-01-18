import React from "react";

const Content = (props) => {
  return (
    <main className="grow overflow-y-auto border border-green-500 px-5">
      {props.children}
    </main>
  );
};

export default Content;
