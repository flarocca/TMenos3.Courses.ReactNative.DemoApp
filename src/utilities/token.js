import {AsyncStorage} from 'react-native';

const tokenNameKey = 'token';

export const setToken = async token =>
  await AsyncStorage.setItem(tokenNameKey, token);

export const getToken = async () =>
  await AsyncStorage.getItem(tokenNameKey);
