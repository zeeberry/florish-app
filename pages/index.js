import styled from 'styled-components';
import {useState} from 'react';
import Intro from '../components/intake/intro';
import Name from '../components/intake/name';
import InterviewDate from '../components/intake/interviewDate';
import Company from '../components/intake/company';
import Role from '../components/intake/role';
import InterviewType from '../components/intake/interviewType';
import Excitement from '../components/intake/excitement';
import Nerves from '../components/intake/nerves';
import Contact from '../components/intake/contact';
import Outro from '../components/intake/outro';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Content = styled.section`
  width: 550px;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Header = styled.header`
  padding: 1em 2em;
`;

const Logo = styled.div`
  letter-spacing: 0.1em;
`;

const Footer = styled.footer`
  padding: 1em 2em;
  display: flex;
  justify-content: center;
  font-size: 0.8em;
`;

export default function Home() {
  const newUser = {
    id: '',
    name: '',
    email: ''
  };
  const newApplication = {
    userId: '',
    company: '',
    role: '',
    initialExcitement: '',
    currentExcitement: ''
  };
  const newInterview = {
    applicationId: '',
    date: '',
    type: '',
    nerves: '',
    notes: '',
    excitement: '',
  };

  const [page, setPage] = useState(0);
  const [user, setUser] = useState(newUser);
  const [application, setApplication] = useState(newApplication);
  const [interview, setInterview] = useState(newInterview);
  const form = [
    Intro, 
    Name,
    InterviewDate,
    Company,
    Role,
    Excitement,
    InterviewType,
    Nerves,
    Contact,
    Outro
  ];
  const Page = form[page];
  
  const onClick = (data) => {
    const nextPage = page + 1;
    if (data.collection) {
      console.log(data);
      if (data.collection === 'newUser') {
        const newState = Object.assign({}, user);
        newState[data.type] = data.value;
        setUser(newState);
      }
      if (data.collection === 'newApplication') {
        const newState = Object.assign({}, application);
        newState[data.type] = data.value;
        if (data.type === 'initialExcitement') {
          newState.currentExcitement = data.value;
        }

        setApplication(newState);
      }
      if (data.collection === 'newInterview') {
        const newState = Object.assign({}, interview);
        newState[data.type] = data.value;
        setInterview(newState);
      }
    }

    if (form[nextPage]) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <Header><Logo>Florish</Logo></Header>
      <Main>
        <Content>
          <Page onClick={onClick} />
        </Content>
      </Main>
      <Footer>Made in NYC</Footer>
    </>
  );
};
