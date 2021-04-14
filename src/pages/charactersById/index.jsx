import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MarvelApi from '../../service/marvelAPI';
import Navbar from '../../components/Nav/Navbar';
import CharacByComics from '../../components/CharactersById';
import * as S from '../characters/style';

const CharacById = () => {
  const { id } = useParams();
  const [characters, setCharacters] = useState([]);
  const [comicId, setComicId] = useState([]);

  const fetch = async () => {
    const { data } = await MarvelApi.get(`/characters/${id}`);
    const { results } = data.data;

    setCharacters(results);
  };

  const requestApi = async () => {
    const { data } = await MarvelApi.get(`/characters/${id}/comics`);
    const { results } = data.data;

    setComicId(results);
  };

  useEffect(() => {
    requestApi();
    fetch();
  }, []);
  return (
    <div className="main">
      <Navbar />
      <S.Main>
        <CharacByComics props={characters} comic={comicId} />
      </S.Main>
    </div>
  );
};

export default CharacById;
