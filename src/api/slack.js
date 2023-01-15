import { toast } from "react-hot-toast";
import { get, post } from "./axios";
import { setLocal } from "../helpers/localStorage";

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
    setLocal("client", client);
    setLocal("headers", headers);

    return { client, headers };
  } catch (error) {
    return { error: error.response.data.errors[0] };
  }
};

export const registerUser = async (body) => {
  try {
    const promise = post(`${BASE_URL}/auth`, body);
    toast.promise(promise, {
      loading: "Creating account",
      success: "Account registered",
      error: "Registration failed",
    });

    const response = await promise;
    const client = { ...response.data.data };
    const headers = {
      "access-token": response.headers["access-token"],
      "client": response.headers["client"],
      "expiry": Number(response.headers["expiry"]) * 1000,
      "uid": response.headers["uid"],
    };
    setLocal("client", client);
    setLocal("headers", headers);

    return { client, headers };
  } catch (error) {
    return { error: error.response.data.errors["full_messages"][0] };
  }
};
