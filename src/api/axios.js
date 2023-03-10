import axios from "axios";

export const post = async (url, body, header = {}) => {
  try {
    const response = await axios.post(url, body, { headers: { ...header } });
    return response;
  } catch (error) {
    throw error;
  }
};

export const get = async (url, header = {}, param = {}) => {
  try {
    const response = await axios.get(url, {
      headers: { ...header },
      params: { ...param },
    });
    return response;
  } catch (error) {
    return error;
  }
};
