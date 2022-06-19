import axios from "axios";

export const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = async () => {
  try {
    const result = await axios.get(`${BASE_URL}/posts`);
    return result;
  } catch (e) {
    return {result: 'failed', error: e};
  }
};