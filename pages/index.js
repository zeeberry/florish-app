import styled from 'styled-components';
import {useState} from 'react';
import Intro from '../components/intake/Intro';
import Name from '../components/intake/Name';

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

export default function Home() {
  const [page, setPage] = useState(0);
  const form = [
    Intro, 
    Name
  ];
  const Page = form[page];

  const onClick = () => {
    const nextPage = page + 1;
    if (form[nextPage]) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <header>Logo</header>
      <Main>
        <Content>
          <Page onClick={onClick} />
        </Content>
      </Main>
      <footer>Made in NYC</footer>
    </>
  );
};
