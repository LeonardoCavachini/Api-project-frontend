import React from 'react';
import * as S from './style';
import Navbar from '../../components/Nav/Navbar';

const Favorites = () => (
  <>
    <Navbar />
    <S.Title><h1>Escolha qual item deseja ver seus favoritos</h1></S.Title>
    <S.Container>
      <div className="card">
        <a href="/comics-fav">HQs</a>
      </div>
      <div className="card">
        <a href="/characters-fav">Characters</a>
      </div>
    </S.Container>
  </>
);

export default Favorites;
