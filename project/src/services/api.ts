import axios, { AxiosInstance } from 'axios';

const DATA_URL = 'https://10.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  return axios.create({
    baseURL: DATA_URL,
    timeout: REQUEST_TIMEOUT,
  });
};
