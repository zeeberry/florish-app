import styled from 'styled-components';
import {useState} from 'react';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Content = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 550px;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
`

export default function Dashboard() {
  return (
    <>
      <header>Logo</header>
      <Main>
        <Content>
          Hell!
        </Content>
      </Main>
      <footer>Made in NYC</footer>
    </>
  );
};
