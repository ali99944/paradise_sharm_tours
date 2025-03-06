import axios from "axios";

export const useAxios = (
  contentType?: "aplication/json" | "multipart/form-data"
) => {
  const token = "";

  return axios.create({
    baseURL: "",
    headers: {
      "Content-Type": contentType as string,
      accept: "application/json",
      lang: "en",
      authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
};
