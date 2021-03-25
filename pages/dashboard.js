import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { getProfileByEmail } from '../graphql/api';
import Context from '../store/context';
import ApplicationList from '../components/dashboard/applicationList';
import InterviewList from '../components/dashboard/interviewList';
import InterviewOverview from '../components/dashboard/interviewOverview';

const Content = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

const Nav = styled.nav`
  padding: 1em;
  border: 1px solid;
`;

const Application = styled.section`
  display: flex;
  border: 1px dashed;
  width: 100%;
`;

const Interview = styled.section`
  padding: 1em;
  border: 1px dotted;
`;

const getProfile = (data) => {
  return data ? data.accountByEmail.data : [];
}

export default function Dashboard() {
  const { data, errorMessage } = getProfileByEmail('zainab@florish.tech');
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
      <Interview>
        <section>
          {!data ? (
              <p>Loading entries...</p>
          ) : profile.map((entry, index, allEntries) => {
              const date = new Date(entry._ts / 1000);
              return (
                <p key={entry._id}>
                  {entry.email}
                </p>
              )
            })
          }
          <div>{state.user.name}</div>
        </section>
      </Interview>
    </Content>
  );
};
