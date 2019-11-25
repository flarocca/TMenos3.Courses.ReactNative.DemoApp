import axios from 'axios';
import {getToken, setToken} from '../utilities/token';
import authenticationApi from './authentication';

const baseURL = 'http://195.39.233.28:8035/';
const axiosWrapper = axios.create({
  baseURL,
});

axiosWrapper.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      if (error.config._retry) {
        return Promise.reject(error);
      }

      error.config._retry = true;

      const authResult = await authenticationApi.auth()
      if (authResult.status === 200) {
        await setToken(authResult.data.token);
        error.config.headers.Authorization = `Bearer ${authResult.data.token}`;

        const requestResult = await axios.request(error.config);
        return requestResult;
      }
    }

    return Promise.reject(error);
  },
);

axiosWrapper.interceptors.request.use(async config => {
  if (config.url === 'auth') {
    return config;
  }

  const token = await getToken();
  config.headers.Authorization = token ? `Bearer ${token}` : '';

  return config;
});

export default axiosWrapper;
