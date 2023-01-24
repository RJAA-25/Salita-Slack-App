import React from "react";

const LoadingContent = () => {
  return (
    <div className="flex grow flex-col items-center justify-center">
      <span className="text-lg font-bold text-accent">Loading...</span>
      <progress className="progress progress-accent w-56"></progress>
    </div>
  );
};

export default LoadingContent;
