import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import useUser from '../hooks/useUser';
import { accountByEmail } from '../graphql/api';
import Context from '../store/context';
import ApplicationList from '../components/dashboard/applicationList';
import InterviewList from '../components/dashboard/interviewList';
import InterviewOverview from '../components/dashboard/interviewOverview';

const Content = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

const getProfile = (data) => {
  return data ? data.accountByEmail.data : [];
}

export default function Dashboard() {
  useUser({ redirectTo: '/signup', redirectIfFound: false });

  const { data, errorMessage } = accountByEmail('zainab@florish.tech');
  const [ profile, setProfile ] = useState([]);
  const { state } = useContext(Context);
  const applications = ['Nike', 'Stash'];
  const selected = 'Nike';
  const interviews = ['Recruiter Call', 'Technical Challenge'];

  useEffect(() => {
    if (!profile.length) {
      setProfile(getProfile(data))
    }
  }, [data, profile.length]);

  return (
      <Content>
        <ApplicationList applications={applications} selected={selected}/>
        <InterviewList interviews={interviews} company={selected} />
        <InterviewOverview interview='Recruiter Call'/>
      </Content>
  );
};
