import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import useUser from '../hooks/useUser';
import { getProfileByEmail } from '../graphql/api';
import Context from '../store/context';
import ApplicationList from '../components/dashboard/applicationList';
import InterviewList from '../components/dashboard/interviewList';
import InterviewOverview from '../components/dashboard/interviewOverview';

const Content = styled.div`
  min-height: 100vh;
  width: 100%;
`;

const getProfile = (data) => {
  return data ? data.accountByEmail.data : [];
}

export default function Dashboard() {
  const user = useUser({ redirectTo: '/signup', redirectIfFound: false });
  const { data, errorMessage } = getProfileByEmail('khobra.z@gmail.com');
  const [ profile, setProfile ] = useState([]);
  const { state } = useContext(Context);

  const name = 'Zainab Ebrahimi';
  const email = 'khobra.z@gmail.com';
  const company = 'Tall Poppy';
  const interviewDate = 'June 11 2021 @ 12pm ET';
  const interviewType = 'Technical Interview';
  const role = 'Software Engineer';
  const excitement = '2';
  const nerves = '2';

  useEffect(() => {
    if (!profile.length) {
      setProfile(getProfile(data))
    }
  }, [data, profile.length]);

  return (
      <Content>
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <hr /> 
        <h3>Company</h3>
        <div>{company}</div>
        <div>{role}</div>
        <h3>Interviews</h3>
        <b>{interviewType}</b>
        <div>Interview date: {interviewDate}</div>
        <div>NOTES</div>
        <div>Excitement: {excitement}</div>
        <div>Nerves: {nerves}</div>
        <textarea/>
      </Content>
  );
};
