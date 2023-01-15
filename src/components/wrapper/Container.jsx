import React from "react";

const Container = (props) => {
  return (
    <div className="container mx-auto flex min-h-screen flex-col border p-5">
      {props.children}
    </div>
  );
};

export default Container;
