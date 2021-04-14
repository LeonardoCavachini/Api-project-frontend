import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    height: 100vh;
  }
  .main {
    background: #BEBEBE;
    height: 100%;
  }
  .navbar {
    background: #FFFFFF;
  }
`;

export default GlobalStyle;
