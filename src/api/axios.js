import axios from 'axios';

export const axiosAPIBridgeInstance = axios.create({
  baseURL: 'http://18.233.176.235:8080/api/',
});

export const axiosAPIInstance = axios.create({
  baseURL: 'http://50.16.139.51:8080/api/'
});