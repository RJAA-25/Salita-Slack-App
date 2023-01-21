import React from "react";

const Content = (props) => {
  return (
    <main className="relative flex max-h-screen grow flex-col gap-1 border-blue-500 p-5">
      {props.children}
    </main>
  );
};

export default Content;
