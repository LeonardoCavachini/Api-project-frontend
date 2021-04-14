import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MarvelApi from '../../service/marvelAPI';

import Navbar from '../../components/Nav/Navbar';
import CharactersCard from '../../components/CardCharacters/index';
import * as S from './style';

const Characters = () => {
  const history = useHistory();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (!window.localStorage.token) {
      history.push('/login');
    }
  }, [history]);

  const fetch = async () => {
    const { data } = await MarvelApi.get('/characters');
    const { results } = data.data;

    setCharacters(results);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="main">
      <Navbar />
      <S.Title><h1>Characters</h1></S.Title>
      <S.Main>
        <CharactersCard props={characters} page="characters" />
      </S.Main>
    </div>
  );
};

export default Characters;
