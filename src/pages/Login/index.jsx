import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import BackApi from '../../service/backendAPI';
import AppContext from '../../context/AppContext';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as S from './style';

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isdisabled,
  } = useContext(AppContext);

  const history = useHistory();

  const fetch = async () => {
    const body = { email, password };
    const { data } = await BackApi.post('/login', body);
    localStorage.setItem('token', JSON.stringify(data.resp.token));
    localStorage.setItem('userId', JSON.stringify(data.resp.id));
    history.push('/main');
    return data;
  };

  useEffect(() => {
    setEmail('');
    setPassword('');
    if (window.localStorage.token || window.localStorage.userId) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
    }
  }, [setEmail, setPassword]);

  return (
    <S.Container>
      <S.Title>Login</S.Title>
      <Input
        value={email}
        type="email"
        onChange={({ target }) => setEmail(target.value)}
        placeholder="ex.adim@admin.com"
        name="Email"
      />
      <Input
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        name="Senha"
        placeholder="ex.12345678"
        type="password"
      />
      <Button
        disabled={isdisabled}
        onClick={() => fetch()}
      />
      <Button
        onClick={() => history.push('/register')}
      >
        Não tenho registro
      </Button>
    </S.Container>
  );
};

export default Login;
