import { useReducer } from 'react';
import useUser from '../hooks/useUser';
import Link from 'next/link';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/globalStyle';
import colors from '../theme/theme';
import { Main, Header, Footer, Logo } from '../components/shared/elements';
import initialState from '../store/initialState';
import Context from '../store/context';
import reducer from '../reducers/reducer';

export default function App({ Component, pageProps }) {
  const user = useUser();

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.png' />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={colors}>
        <Context.Provider value={{ state, dispatch }}>
          <Header>
            <Logo>Florish</Logo>
            {(user && <Link href="/api/logout"><a>Logout</a></Link>) || <Link href="/signup"><a>Login</a></Link>}
          </Header>
          <Main>
            <Component {...pageProps} />
          </Main>
          <Footer>Made in NYC</Footer>
        </Context.Provider>
      </ThemeProvider>
    </>
  );
}
