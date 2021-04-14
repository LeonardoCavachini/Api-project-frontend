import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BackApi from '../../service/backendAPI';
import * as S from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isdisabled, setIsdisabled] = useState(true);

  const fetch = async () => {
    const body = { email, password };
    await BackApi.post('/register', body);
    setTimeout(() => history.push('/'), 1800);
  };

  useEffect(() => {
    const checkEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email);
    const checkPassword = /^(?=.*?[0-9]).{8,}$/i.test(password);
    if (checkEmail === true && checkPassword === true) {
      setIsdisabled(false);
    } else {
      setIsdisabled(true);
    }
  }, [email, password]);

  return (
    <S.Container>
      <S.Title>Registre-se</S.Title>
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
        placeholder="no minimo 8 digitos"
        type="password"
      />
      <Button
        disabled={isdisabled}
        onClick={() => fetch()}
      >
        Registrar
      </Button>
    </S.Container>
  );
};

export default Register;
