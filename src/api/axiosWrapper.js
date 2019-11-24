import axios from 'axios';
import {getToken, setToken} from '../utilities/token';
import authenticationApi from './authentication';

const baseURL = 'http://195.39.233.28:8035/';
const axiosWrapper = axios.create({
  baseURL,
});

axiosWrapper.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      return authenticationApi.auth()
        .then(res => {
          if (res.status === 200) {
            setToken(res.data.token);
            return axios.request(error.config);
          }
        });
    }

    return Promise.reject(error);
  },
);

axiosWrapper.interceptors.request.use(async config => {
  if (config.url === '/auth') {
    return config;
  }

  var token = await getToken();
  config.headers.Authorization = token ? `Bearer ${token}` : '';

  return config;
});

export default axiosWrapper;
