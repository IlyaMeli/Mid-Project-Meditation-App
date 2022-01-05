import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://61c310fb9cfb8f0017a3e935.mockapi.io/mid-users",
});

export default class api {
  static getItems = async () => {
    const { data } = await baseURL.get();
    return data;
  };
  static getItem = async (id) => {
    const { data } = await baseURL.get(`/${id}`);
    return data;
  };

  static putItem = async (item) => {
    return await baseURL.put(`/${item.id}`, item);
  };

  static postItem = async (item) => {
    return await baseURL.post("/", item);
  };

  static deleteItem = async (id) => {
    return await baseURL.delete(id);
  };
}
