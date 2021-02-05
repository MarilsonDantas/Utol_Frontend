import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://cacbempreenderapp.org.br/backend', 
  baseURL: 'http://192.168.15.8:3333', 
});

api.defaults.timeout = 30000;

export default api;