import React from "react";

const Container = (props) => {
  return (
    <div className="container mx-auto flex h-screen flex-col border">
      {props.children}
    </div>
  );
};

export default Container;
