import axios from 'axios';

let token = localStorage.getItem('token');

export const HTTP = axios.create({
  baseURL: `http://localhost:3000/`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
