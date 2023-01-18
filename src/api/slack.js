import { toast } from "react-hot-toast";
import { get, post } from "./axios";
import { getLocal, setLocal } from "../helpers/localStorage";

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
      "expiry": Number(response.headers["expiry"]),
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
      "expiry": Number(response.headers["expiry"]),
      "uid": response.headers["uid"],
    };
    setLocal("client", client);
    setLocal("headers", headers);

    return { client, headers };
  } catch (error) {
    return { error: error.response.data.errors["full_messages"][0] };
  }
};

export const initializeClient = async () => {
  const promise = toast.loading("Loading Data");
  try {
    const users = await getUsers();
    const channels = await getChannels();
    const dMessages = await getDMessages();
    toast.success("Done", { id: promise });
    return { users, channels, dMessages };
  } catch (error) {
    toast.error("Fail", { id: promise });
  }
};

export const getUsers = async () => {
  const headers = getLocal("headers");
  try {
    const response = await get(`${BASE_URL}/users`, headers);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getChannels = async () => {
  const headers = getLocal("headers");
  try {
    const response = await get(`${BASE_URL}/channels`, headers);
    if (response.data.data) {
      // const channelIDs = response.data.data.map((channel) => channel.id);
      // const channels = channelIDs.map(async (id) => {
      //   const res = await channelDetails(id);
      //   console.log("channel map", { ...res });
      //   return res;
      // });
      // console.log("channels", channels);
      // return channels;
      return response.data.data;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
};

const channelDetails = async (channelID) => {
  const headers = getLocal("headers");
  try {
    const response = await get(`${BASE_URL}/channels/${channelID}`, headers);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getDMessages = async () => {
  const headers = getLocal("headers");
  try {
    const response = await get(`${BASE_URL}/users/recent`, headers);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
