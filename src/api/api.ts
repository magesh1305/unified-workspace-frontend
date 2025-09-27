import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const post = async (url: string, data: any) => {
  const res = await axios.post(`${API_URL}${url}`, data);
  return res.data;
};
