import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 150px;
  max-width: 400px;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  div {
    background: red;
    width: 140px;
    height: 100px;
    margin: 15px auto;
    text-align: center;
    border-radius: 10px;
    padding: 35px 1px 1px 1px;
    
    a {
      text-decoration:none;
      font-weight: bolder;
      font-size: 20px;
      color: black;
      
    }
  }
  .card:hover {
    box-shadow: 4px 4px 4px 3px red;
  }
  a:hover {
    font-size: 25px;
  }
`;
export const Title = styled.div`
  width:100%;
  max-width: 1000px;
  margin: 10px auto; 
  h1 {
    font-size: 50px;
    font-weight: bolder
    
  }
`;
