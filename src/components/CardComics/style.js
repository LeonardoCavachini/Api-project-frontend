import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 300px;
  h1 {
    font-size: 20px;
    font-weight: bolder;
    text-decoration: none;
  }
  img {
    width: 200px;
  }
   p {
    font-size: 20px;
  }
  a {
    text-decoration: none;
    text-align: center;
    color: black;
  }
`;
