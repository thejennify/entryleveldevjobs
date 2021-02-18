// globalStyles.js
import { createGlobalStyle } from 'styled-components';
import './_app.css';
 
const GlobalStyle = createGlobalStyle`
  html, body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
  
  body {
    background-color: var(--global-background-color);
    font-family: 'Poppins', sans-serif;
  }
`;
 
export default GlobalStyle;
