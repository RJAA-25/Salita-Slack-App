import React from "react";

const Content = (props) => {
  return (
    <main className="flex max-h-screen grow flex-col gap-2 p-5">
      {props.children}
    </main>
  );
};

export default Content;
