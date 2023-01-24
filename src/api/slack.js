import { toast } from "react-hot-toast";
import { get, post } from "./axios";
import { getLocal, setLocal } from "../helpers/localStorage";
import { getUnique } from "../helpers/unique";

// For Developement
const BASE_URL = "http://206.189.91.54//api/v1";

// For Production
// Configured in _redirects file for Netlify
// const BASE_URL = "/api";

// Login User
export const loginUser = async (body) => {
  toast.dismiss();
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
    setLocal("salita", { client, headers });

    return { client, headers };
  } catch (error) {
    return { error: error.response.data.errors[0] };
  }
};

// Register User
export const registerUser = async (body) => {
  toast.dismiss();
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
    setLocal("salita", { client, headers });

    return { client, headers };
  } catch (error) {
    return { error: error.response.data.errors["full_messages"][0] };
  }
};

// Initialize Client
export const initializeClient = async () => {
  // const promise = toast.loading("Loading Data");
  try {
    const users = await getUsers();
    const channels = await getChannels();
    const dMUsers = await getDMUsers();
    // toast.success("Done", { id: promise });
    return { users, channels, dMUsers };
  } catch (error) {
    // toast.error("Fail", { id: promise });
  }
};

// Retrieve All Users
export const getUsers = async () => {
  const { headers } = getLocal("salita");
  try {
    const response = await get(`${BASE_URL}/users`, headers);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

// Retrieve User Channels
export const getChannels = async () => {
  const { headers } = getLocal("salita");
  try {
    const response = await get(`${BASE_URL}/channels`, headers);
    if (response.data.data) return response.data.data;
    else return [];
  } catch (error) {
    console.log(error);
  }
};

// Retrieve Channel Details
export const channelDetails = async (channelID) => {
  const { headers } = getLocal("salita");
  try {
    const response = await get(`${BASE_URL}/channels/${channelID}`, headers);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

// Retrieve Direct Message Users
export const getDMUsers = async () => {
  const { headers } = getLocal("salita");
  try {
    const response = await get(`${BASE_URL}/users/recent`, headers);
    return getUnique(response.data.data);
  } catch (error) {
    console.log(error);
  }
};

// Retrieve Messages
export const getMessages = async (type, id) => {
  const { headers } = getLocal("salita");
  const params = {
    "receiver_class": type,
    "receiver_id": id,
  };
  try {
    const response = await get(`${BASE_URL}/messages`, headers, params);
    return getUnique(response.data.data);
  } catch (error) {}
};

// Send Messages
export const sendMessage = async (type, id, chat) => {
  const { headers } = getLocal("salita");
  const body = {
    "receiver_class": type,
    "receiver_id": id,
    "body": chat,
  };
  try {
    const response = await post(`${BASE_URL}/messages`, body, headers);
    return response;
  } catch (error) {}
};

// Create Channel
export const createChannel = async (body) => {
  const { headers } = getLocal("salita");
  toast.dismiss();
  const promise = toast.loading("Creating Channel");
  try {
    const response = await post(`${BASE_URL}/channels`, body, headers);
    if (response.data.errors) {
      toast.error("Creation failed", { id: promise });
      return { error: response.data.errors[0] };
    }
    if (response.data.data) {
      toast.success("Channel created", { id: promise });
      return { data: response.data.data };
    }
  } catch (error) {
    console.log(error);
  }
};

// Add Channel Member
export const addMembers = async (channelID, ids) => {
  const { headers } = getLocal("salita");
  const promise = toast.loading("Adding members");
  try {
    let response;
    for (let id of ids) {
      let body = { id: channelID, member_id: id };
      response = await post(`${BASE_URL}/channel/add_member`, body, headers);
    }
    toast.success("Members added", { id: promise });
    return { data: response.data.data.channel_members };
  } catch (error) {
    toast.error("Failed adding members", { id: promise });
    console.log(error);
  }
};
