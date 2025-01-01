import axios from 'axios';
import {log} from 'sonarqube-scanner/build/src/logging';

const axiosInstance = axios.create({
  baseURL: 'http://98.188.56.147/api/',
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
    tenant: 'root',
  },
});

// Add a response interceptor to handle errors
axiosInstance.interceptors.response.use(
  response => response, // Pass through successful responses
  error => {
    console.error('Error response:', error.response || error.message);
    const errorObject = {
      error: true,
      message: error.message,
      ...(error.response ? {response: error.response.data} : {}),
    };
    return Promise.reject(errorObject);
  },
);

export const setAxiosToken = async (token: string) => {
  console.log(token, '<<<<<<');

  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  }
};

export default axiosInstance;
