import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

const RightNav = ({ open }) => {
  const id = JSON.parse(localStorage.getItem('userId'));
  return (
    <S.Ul open={open}>
      <li><a href="/main">Home</a></li>
      <li><a href="/favorites">Favorites</a></li>
      <li><a href="/characters">Characters</a></li>
      <li><a href="/comics">Comics</a></li>
      <li><a href={`/profile/${id}`}>My profile</a></li>
      <li><a href="/">Logout</a></li>
    </S.Ul>
  );
};

RightNav.propTypes = {
  open: PropTypes.bool,
};
RightNav.defaultProps = {
  open: false,
};

export default RightNav;
