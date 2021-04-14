import axios from 'axios';
import md5 from 'md5';

const baseURL = 'http://gateway.marvel.com/v1/public/';

const keyPublic = 'f4273f584690eaaded827f29448a5b17';

const keyPrivate = '45165b4977c1710adfd869307093763d2da91ebe';

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
