import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import BackApi from '../../service/backendAPI';
import AppContext from '../../context/AppContext';
import * as S from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Navbar from '../../components/Nav/Navbar';

const Profile = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isdisabled,
    setIsdisabled,
  } = useContext(AppContext);
  const history = useHistory();
  const [auth, setAuth] = useState('');
  const { id } = useParams();

  useEffect(() => {
    if (!window.localStorage.token) {
      history.push('/login');
    } else {
      setAuth(JSON.parse(localStorage.getItem('token')));
      setIsdisabled(true);
    }
  }, [history, setIsdisabled]);

  const fetch = async () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: auth,
    };
    const body = { email, password };
    await BackApi.put(`/profile/${id}`, body, {
      headers,
    });
    setTimeout(() => history.push('/'), 1800);
  };

  return (
    <div className="main">
      <Navbar />
      <S.Container>
        <Input
          name="Email"
          palceholder="admin@admin.com"
          onChange={({ target }) => setEmail(target.value)}
        />
        <Input
          name="Password"
          placeholder="12345678"
          onChange={({ target }) => setPassword(target.value)}
        />
        <S.Button>
          <Button
            disabled={isdisabled}
            onClick={() => fetch()}
          >
            Alterar
          </Button>
        </S.Button>
      </S.Container>
    </div>
  );
};

export default Profile;
