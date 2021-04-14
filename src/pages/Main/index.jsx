import React from 'react';
import Navbar from '../../components/Nav/Navbar';
import * as S from './style';

const Main = () => (
  <div className="main">
    <Navbar />
    <S.Container>
      <h1>Bem vindo ao Projeto Marvel API</h1>
      <h2>Selecione o card que você deseja obter informações</h2>
      <div>
        <a href="/comics">
          <div>HQs</div>
        </a>
        <a href="/characters">
          <div>Personagens</div>
        </a>
      </div>
    </S.Container>
  </div>
);

export default Main;
