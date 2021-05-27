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
  min-height: 100vh;
  width: 100%;
`;

export default function Dashboard() {
  const user = useUser({ redirectTo: '/signup', redirectIfFound: false });
  const [profile, setProfile] = useState(null);
  const [email, setEmail] = useState(null);
  const [applications, setApplications] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const { state } = useContext(Context);

  useEffect(() => {
    async function fetchAccount() {
      if (user?.email && !profile) {
        const { data, errorMessage } = await accountByEmail(user.email);
        const account = data ? data.accountByEmail.data[0] : null;
        if (account) {
          setProfile(account.profile);
          setEmail(account.email);
          setApplications(account.profile.applications.data);
        }
        if (errorMessage) {
          setErrorMessage(errorMessage);
        }
      }
    }
    fetchAccount();
  }, [user, profile]);

  return (user === undefined) ?
    (
      <>
        <section>
          <h1>Loading Dashboard...</h1>
        </section>
      </>
    )
    : (user !== null) ?
      (
        <>
          {errorMessage &&
              <section>
                <h1>Sorry, there was an error: {errorMessage}</h1>
              </section>}

          {profile &&
            <Content>
              <div>Name: {profile.name}</div>
              <div>Email: {email}</div>
              <hr />
              {applications.map((entry) => {
                return (
                  <div key={entry._id}>
                    <div>{entry.company}</div>
                    <div>Role: {entry.role}</div>
                    <p>Interviews with {entry.company}:</p>
                    {entry.interviews.data.map((interview, index) => {
                      return (
                        <div key={interview._id}>
                          <div>Round: {interview.type}</div>
                          <div>Date: {interview.date}</div>
                          <div>Nerves: {interview.nerves}</div>
                          <div>Excitement: {interview.excitement}</div>
                        </div>
                      )
                    })}
                    <hr />
                  </div>)
              })}
            </Content>}
        </>
      )
      :
      <>
        <section>
          <h1>403 Forbidden</h1>
        </section>
      </>;
};
