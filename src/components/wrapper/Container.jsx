import React from "react";

const Container = (props) => {
  return (
    <div className="flex h-screen flex-col lg:container lg:mx-auto">
      {props.children}
    </div>
  );
};

export default Container;
