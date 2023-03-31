import axios from 'axios';

export const axiosAPIBridgeInstance = axios.create({
  baseURL: 'https://postmenbridge.ddns.net:8443/api/',
});

export const axiosAPIInstance = axios.create({
  baseURL: 'https://postmen.ddns.net:8443/api/'
});