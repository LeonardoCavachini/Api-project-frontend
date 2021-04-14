import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import BackApi from '../../service/backendAPI';
import * as S from './style';
import blackHeart from '../../images/blackHeartIcon.svg';
import whiteHeart from '../../images/whiteHeartIcon.svg';

const ComicsById = ({ props, comic }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();

  const Favorite = async () => {
    const { title, thumbnail: { path, extension } } = props[0];
    const thumbnail = `${path}.${extension}`;
    const idComic = id;
    const body = { title, thumbnail, idComic };
    if (isFavorite === true) {
      setIsFavorite(false);
      await BackApi.delete(`/comFavorite/${id}`);
    } else {
      setIsFavorite(true);
      await BackApi.post('/comFavorite', body);
    }
  };
  const checkFavorite = async () => {
    const { data } = await BackApi.get(`/comFavorite/${id}`);
    if (data) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  };
  useEffect(() => {
    checkFavorite();
  }, []);
  return (
    <>
      {props.map((el) => (
        <S.Card key={el.id}>
          <h1>{el.title}</h1>
          <img src={`${el.thumbnail.path}.${el.thumbnail.extension}`} alt="hero-img" />
          <h3>{el.description}</h3>
          <input type="image" src={isFavorite ? blackHeart : whiteHeart} alt="favorite" onClick={() => Favorite()} />
        </S.Card>
      ))}
      {comic.map((el) => (
        <S.CardComics key={el.id}>
          <h3>Personagem</h3>
          <h1>{el.title}</h1>
          <img src={`${el.thumbnail.path}.${el.thumbnail.extension}`} alt="character-img" />
          <p>{el.description}</p>
        </S.CardComics>
      ))}
    </>
  );
};

ComicsById.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  0: PropTypes.number,
  map: PropTypes.func,
  props: PropTypes.arrayOf(PropTypes.object),
  comic: PropTypes.arrayOf(PropTypes.object),
};

ComicsById.defaultProps = {
  map: PropTypes.func,
  props: PropTypes.array,
  comic: PropTypes.array,
  0: 0,
};

export default ComicsById;
