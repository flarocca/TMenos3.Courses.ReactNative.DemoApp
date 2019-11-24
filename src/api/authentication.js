import axiosWrapper from './axiosWrapper';

export default {
  auth: () => axiosWrapper.post('auth', {apiKey: '23567b218376f79d9415'}),
};
