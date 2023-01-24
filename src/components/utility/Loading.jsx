import React from "react";
import Header from "../brand/Header";

const Loading = () => {
  return (
    <div className="flex h-screen flex-col p-5">
      <Header></Header>
      <div className="flex grow flex-col items-center justify-center">
        <span className="text-lg font-bold text-accent">Loading...</span>
        <progress className="progress progress-accent w-56"></progress>
      </div>
    </div>
  );
};

export default Loading;
