import React, { useEffect, useState } from 'react';
import BackApi from '../../service/backendAPI';
import Navbar from '../../components/Nav/Navbar';
import * as S from './style';

const FavoritesCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [render, setRender] = useState(true);
  const [charactersmsg] = useState('Ainda não há itens favoritados...');

  const getAllFavorites = async () => {
    const { data } = await BackApi.get('/charcFavorite/all');

    if (data.length > 0) {
      setCharacters(data);
    } else {
      setRender(false);
    }
  };
  useEffect(() => {
    getAllFavorites();
  }, []);

  return (
    render
      ? (
        <div className="main">
          <Navbar />
          <S.Title><h1>Favorites Characters</h1></S.Title>
          {characters.map((el) => (
            <S.Container key={el.id}>
              <h2>{el.name}</h2>
              <img src={el.thumbnail} alt="hero" />
            </S.Container>
          ))}
        </div>
      )
      : (
        <div>
          <Navbar />
          <S.Title><h1>Favorites Characters</h1></S.Title>
          <h2>{charactersmsg}</h2>
        </div>
      )
  );
};

export default FavoritesCharacters;
