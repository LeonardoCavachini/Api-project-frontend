import style from 'styled-components';
import Image from '../../images/main.jpeg';

export const Container = style.div`
  width: 100%;
  height: 812px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  background-image: url(${Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #FFFFF0
  }
  h2 {
    color: #FFFFF0
  }
  div {
    display: flex;
    padding: 15px;
    width: 100%;
    max-width: 500px;
    justify-content: space-around;
    margin-top: 50px;
    a {
      text-decoration: none;
    }
    a:hover {
      
    } 
    div {
      height: 100px;
      width: 200px;
      background: red;
      color: black;
      font-size: 35px;
      padding: 30px;

    }
    div:hover {
      box-shadow: 4px 2px 2px 4px rgba(255, 0, 0, 2);
    }
  }
`;
