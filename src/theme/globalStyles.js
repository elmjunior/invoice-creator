import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  div {
    display: flex;
    flex-direction: column
  }
`;

export default GlobalStyle;
