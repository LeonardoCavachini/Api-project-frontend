import React, { useEffect, useState } from 'react';
import BackApi from '../../service/backendAPI';
import Navbar from '../../components/Nav/Navbar';
import * as S from '../favCharacters/style';

const FavoritesComics = () => {
  const [comics, setComics] = useState([]);
  const [render, setRender] = useState(true);
  const [comicMsg] = useState('Ainda não há itens favoritados...');

  const getAllFavorites = async () => {
    const { data } = await BackApi.get('/comFavorite/all');
    if (data.length > 0) {
      setComics(data);
    } else {
      setRender(false);
    }
  };

  useEffect(() => {
    getAllFavorites();
  }, []);

  return (
    (render
      ? (
        <div className="main">
          <Navbar />
          <S.Title><h1>Favorites Comics</h1></S.Title>
          {comics.map((el) => (
            <S.Container key={el.id}>
              <h2>{el.title}</h2>
              <img src={el.thumbnail} alt="comic" />
            </S.Container>
          ))}
        </div>
      )
      : (
        <div>
          <Navbar />
          <h1>{comicMsg}</h1>
        </div>
      ))
  );
};

export default FavoritesComics;
