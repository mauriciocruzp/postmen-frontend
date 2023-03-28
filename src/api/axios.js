import axios from 'axios';

export const axiosAPIBridgeInstance = axios.create({
  baseURL: 'http://localhost:9292/api/',
});

export const axiosAPIInstance = axios.create({
  baseURL: 'http://localhost:8081/api/',
});