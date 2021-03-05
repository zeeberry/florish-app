import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/theme';
import GlobalStyle from '../theme/globalStyle';
import { Main, Content } from '../components/shared/elements';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Content>
          <Story />
        </Content>
      </ThemeProvider>
    </>
  ),
];
