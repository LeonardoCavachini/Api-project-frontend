import styled from 'styled-components';
import Vision from '../../images/vision.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  padding: 2%;
  flex-direction: column;
  background-image: url(${Vision});
  background-position: justify;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;

`;

export const Title = styled.h1`
  margin: 20px 0;
  font-size: 30pt;
  color: black;
  background: white;
`;
