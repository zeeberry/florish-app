import { createGlobalStyle} from 'styled-components';
import colors from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  button {
    background-color: ${colors.purple};
    color: ${colors.white};
    border-radius: 2em;
    border: none;
    margin-top: 2em;
    padding: 1.2em 3em;
    min-width: 6.25em;
    display: block;
    cursor: pointer;
    width: 100%;
    font-size: 1em;
  }

  h1 {
    font-size: 2.5em;
    font-weight: 700;
    margin-top: 0.8rem;
    text-align: center;
  }

  p {
    margin: 1em 0 0;
  }

  label {
    align-self: baseline;
    margin-bottom: 0.5em;
  }

  input:not([type=radio]),
  select {
    padding: 1.2em;
    width: 100%;
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
    padding-inline-start: 0;
  }
`;

export default GlobalStyle;
