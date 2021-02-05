import { useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/globalStyle';
import theme from '../theme/theme';
import initialState from '../store/initialState';
import { Main, Header, Footer, Logo } from '../components/shared/elements';

export default function App({ Component, pageProps }) {
  const Context = React.createContext();
  //const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Context.Provider value={{ initialState }}>
          <Header><Logo>Florish</Logo></Header>
            <Main>
              <Component {...pageProps} />
            </Main>
          <Footer>Made in NYC</Footer>
        </Context.Provider>
      </ThemeProvider>
    </>
  )
}
