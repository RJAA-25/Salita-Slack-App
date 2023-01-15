import { toast } from "react-hot-toast";
import { get, post } from "./axios";

const BASE_URL = "http://206.189.91.54//api/v1";

export const loginUser = async (body) => {
  try {
    const promise = post(`${BASE_URL}/auth/sign_in`, body);
    toast.promise(promise, {
      loading: "Logging in",
      success: "Logged in",
      error: "Login failed",
    });

    const response = await promise;
    const client = { ...response.data.data };
    const headers = {
      "access-token": response.headers["access-token"],
      "client": response.headers["client"],
      "expiry": Number(response.headers["expiry"]) * 1000,
      "uid": response.headers["uid"],
    };

    localStorage.setItem("client", JSON.stringify(client));
    localStorage.setItem("headers", JSON.stringify(headers));

    return { client, headers };
  } catch (error) {
    return { error: error.response.data.errors[0] };
  }
};
