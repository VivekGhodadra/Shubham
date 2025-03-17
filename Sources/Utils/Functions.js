// import moment from 'moment';
import { Alert, Linking } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { navigationRef } from '../Navigation';

const requestTimeout = 30000;
const ALERT = ({ Title, Text, Buttons }) => Alert.alert(Title, Text, Buttons);
const wait = ms => new Promise(r => setTimeout(r, ms));
const OpenUrl = url => Linking.openURL(url);

const setAppData = async data => {
  const previousValue = await getAppData();
  if (previousValue) {
    await AsyncStorage.setItem(
      'appdata',
      JSON.stringify({ ...previousValue, ...data }),
    );
  } else {
    await AsyncStorage.setItem('appdata', JSON.stringify(data));
  }
};

const getAppData = async () => {
  const value = await AsyncStorage.getItem('appdata');
  return JSON.parse(value);
};

const formatDate = ({ date, format = 'DD-MM-YYYY' }) => {
  if (!date) return null;
  const d = moment(date).format(format);
  return d;
};

const handleResponse = response => {
  if (response?.status === 401 || response?.status === undefined) {
    // return navigationRef.reset({ index: 0, routes: [{ name: 'Login' }] });
    return {
      status: 401,
      message: 'Unauthorized. Please login again.',
      data: null,
    };
  }
  if (response?.status !== 200) {
    if (response?.message == 'No records found') return response;
    Toast.error(response?.message ?? 'Something went wrong. Please try again.');
  }
  return response;
};

const Functions = {
  requestTimeout,
  ALERT,
  OpenUrl,
  setAppData,
  getAppData,
  wait,
  formatDate,
  handleResponse,
};
export default Functions;
