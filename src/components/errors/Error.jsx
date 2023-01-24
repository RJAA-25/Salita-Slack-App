import { useRouteError } from "react-router-dom";
import Header from "../brand/Header";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="container mx-auto h-screen  p-5">
      <Header />
      <div className="my-5 flex flex-col items-center justify-center">
        <img src="/src/assets/images/error.png" alt="error" />
        <span className="block text-3xl font-bold text-primary lg:text-6xl">
          {error.status}: {error.statusText}
        </span>
      </div>
    </div>
  );
};

export default Error;
