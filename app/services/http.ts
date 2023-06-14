import axios from "axios";
import { MOVIE_DB_ACCESS_TOKEN } from "@env";

axios.defaults.headers.common.accept = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const addLoginHeaders = (config: any) => {
  let authToken = MOVIE_DB_ACCESS_TOKEN;
  if (authToken && authToken.length > 0) {
    config.headers["Authorization"] = `Bearer ${authToken}`;
  }
  return config;
};

axios.interceptors.request.use(
  function (config: any) {
    config = addLoginHeaders(config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response: any) => {
    return response;
  },
  function (error: any) {
    if (
      error?.response?.status === 401 &&
      window.location.pathname !== "/login"
    ) {
    }
    //something with error
    return Promise.reject(error);
  }
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  // headers,
};
