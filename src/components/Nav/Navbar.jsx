import React from 'react';
import * as S from './style';
import Burger from './Burger';
import Marvel from '../../images/Marvel.png';

const Navbar = () => (
  <S.Nav>
    <div className="logo">
      <img src={Marvel} alt="marvel-logo" />
    </div>
    <Burger />
  </S.Nav>
);

export default Navbar;
