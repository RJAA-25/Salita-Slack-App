import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { StateProvider } from "./store/State";
import router from "./config/router";
import "./index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider>
      <Toaster position="bottom-right" />
      <RouterProvider router={router} />
    </StateProvider>
  </React.StrictMode>
);
