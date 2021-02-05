import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/globalStyle';
import theme from '../theme/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
