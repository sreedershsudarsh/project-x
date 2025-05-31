import axios from "axios";
import { URL } from "../../commonComponent/Api/db";
export const GetUser = async () => {
  const response = await axios.get(URL + "/users");
  return response.data;
};
export const PostUser = async (body) => {
  const response = await axios.post(URL + "/user", body);
  return response.data;
};
