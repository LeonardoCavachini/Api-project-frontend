import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MarvelApi from '../../service/marvelAPI';
import Navbar from '../../components/Nav/Navbar';
import CardComicsById from '../../components/comicsById';
import * as S from '../characters/style';

const ComById = () => {
  const { id } = useParams();
  const [byId, setById] = useState([]);
  const [character, setCharacter] = useState([]);

  const ComicsApi = async () => {
    const { data } = await MarvelApi.get(`/comics/${id}`);
    const { results } = data.data;
    setCharacter(results);
  };

  const charactersByComicsApi = async () => {
    const { data } = await MarvelApi.get(`/comics/${id}/characters`);
    const { results } = data.data;
    setById(results);
  };
  useEffect(() => {
    charactersByComicsApi();
    ComicsApi();
  }, []);

  return (
    <div className="main">
      <Navbar />
      <S.Main>
        <CardComicsById props={character} comic={byId} />
      </S.Main>
    </div>
  );
};

export default ComById;
