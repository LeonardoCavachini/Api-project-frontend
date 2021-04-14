import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MarvelApi from '../../service/marvelAPI';
import ComicsCard from '../../components/CardComics';
import Navbar from '../../components/Nav/Navbar';
import * as S from './style';

const Comics = () => {
  const [characters, setCharacters] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!window.localStorage.token) {
      history.push('/login');
    }
  }, [history]);

  const fetch = async () => {
    const { data } = await MarvelApi.get('/comics');
    const { results } = data.data;
    setCharacters(results);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="main">
      <Navbar />
      <S.Title><h1>Comics</h1></S.Title>
      <S.Main>
        <ComicsCard props={characters} />
      </S.Main>
    </div>
  );
};

export default Comics;
