import axios, { AxiosResponse } from "axios";

export const getReq = async (url: string) => {
  return axios.get(url).then((response: AxiosResponse) => {
    return response.data;
  });
};
