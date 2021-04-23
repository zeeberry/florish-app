import { createGlobalStyle } from 'styled-components';
import colors from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    background-color: ${colors.purple};
    color: ${colors.white};
    border-radius: 0.3em;
    border: none;
    margin-top: 1em;
    padding: 0.7em 3em;
    min-width: 6.25em;
    display: block;
    cursor: pointer;
  }

  input:not([type=radio]),
  select {
    padding: 1em 1.2em;
    width: 100%;
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
    padding-inline-start: 0;
  }
`;

export default GlobalStyle;
