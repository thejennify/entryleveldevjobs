// globalStyles.js
import { createGlobalStyle } from 'styled-components';
import './_app.css';
 
const GlobalStyle = createGlobalStyle`
  html{
    height: 100vh;
  }
  
  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: var(--global-background-color);
    font-family: 'Poppins', sans-serif;
  }

  :root{
      box-sizing: border-box;
  }
`;
 
export default GlobalStyle;
