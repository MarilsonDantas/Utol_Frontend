import axios from 'axios';

const api = axios.create({  
  // baseURL: 'https://api.utol.com.br/', 
  baseURL: 'http://192.168.15.6:3333', 
});

api.defaults.timeout = 30000;

export default api;