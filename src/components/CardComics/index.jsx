import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

const ComicsCard = ({ props }) => (
  <>
    {props.map((el) => (
      <S.Card key={el.id}>
        <a href={`/comics/${el.id}`}>
          <h1>{el.title}</h1>
          <img src={`${el.thumbnail.path}.${el.thumbnail.extension}`} alt="hero-img" />
        </a>
      </S.Card>
    ))}
  </>
);

ComicsCard.propTypes = {
  map: PropTypes.func,
  props: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    thumbnail: PropTypes.string,
  }),
};
ComicsCard.defaultProps = {
  map: PropTypes.func,
  props: PropTypes.object,
};

export default ComicsCard;
