import axios from 'axios';

const backApi = axios.create({
  baseURL: process.env.REACT_APP_API_F_URL || 'http://localhost:3001',
});

export default backApi;
