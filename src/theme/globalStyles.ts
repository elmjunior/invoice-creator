import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  a {
    color: ${(props) => props.theme.colors.yellow};
    
    font-weight: bold
  }
  a:hover {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    
  }
 
`;

export default GlobalStyle;
