import { useState } from 'react';
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
import { Content } from '../components/shared/elements';

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
    <Content>
      <Page onClick={onClick} />
    </Content>
  );
};
