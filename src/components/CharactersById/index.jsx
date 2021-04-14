import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import BackApi from '../../service/backendAPI';
import * as S from './style';
import blackHeart from '../../images/blackHeartIcon.svg';
import whiteHeart from '../../images/whiteHeartIcon.svg';

const CharactersById = ({ props, comic }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();

  const Favorite = async () => {
    const { name, thumbnail: { path, extension } } = props[0];
    const thumbnail = `${path}.${extension}`;
    const idCharacter = id;
    const body = { name, thumbnail, idCharacter };
    if (isFavorite === true) {
      setIsFavorite(false);
      await BackApi.delete(`/charcFavorite/${id}`);
    } else {
      setIsFavorite(true);
      await BackApi.post('/charcFavorite', body);
    }
  };
  const checkFavorite = async () => {
    const { data } = await BackApi.get(`/charcFavorite/${id}`);
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
          <h1>{el.name}</h1>
          <img src={`${el.thumbnail.path}.${el.thumbnail.extension}`} alt="hero-img" />
          <h3>{el.description}</h3>
          <input type="image" src={isFavorite ? blackHeart : whiteHeart} alt="favorite" onClick={() => Favorite()} />
        </S.Card>
      ))}
      {comic.map((el) => (
        <S.CardComics key={el.id}>
          <h3>Comic</h3>
          <h1>{el.title}</h1>
          <img src={`${el.thumbnail.path}.${el.thumbnail.extension}`} alt="character-img" />
          <p>{el.description}</p>
        </S.CardComics>
      ))}
    </>
  );
};

CharactersById.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  0: PropTypes.number,
  map: PropTypes.func,
  props: PropTypes.arrayOf(PropTypes.object),
  comic: PropTypes.arrayOf(PropTypes.object),
};

CharactersById.defaultProps = {
  map: PropTypes.func,
  props: PropTypes.array,
  comic: PropTypes.array,
  0: 0,
};

export default CharactersById;
