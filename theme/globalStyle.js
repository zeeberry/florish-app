import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    padding: 1em 1.2em;
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
`;

export default GlobalStyle;
