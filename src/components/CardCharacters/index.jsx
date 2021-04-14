import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

const CharactersCard = ({ props }) => (
  <>
    {props.map((el) => (
      <S.Card key={el.id}>
        <a href={`/characters/${el.id}`}>
          <h1>{el.name}</h1>
          <img src={`${el.thumbnail.path}.${el.thumbnail.extension}`} alt="hero-img" />
        </a>
      </S.Card>
    ))}
  </>
);

CharactersCard.propTypes = {
  map: PropTypes.func,
  props: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    thumbnail: PropTypes.string,
  }),
};
CharactersCard.defaultProps = {
  map: PropTypes.func,
  props: PropTypes.object,
};

export default CharactersCard;
