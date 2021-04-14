import axios from 'axios';
import md5 from 'md5';

const baseURL = process.env.REACT_APP_API_M_URL || 'https://gateway.marvel.com/v1/public/';

const keyPublic = process.env.REACT_APP_P_K;

const keyPrivate = process.env.REACT_APP_PRI_K;

const ts = Number(new Date());

const hash = md5(ts + keyPrivate + keyPublic);

const api = axios.create({
  baseURL,
  params: {
    ts,
    apikey: keyPublic,
    hash,
  },
});

export default api;
