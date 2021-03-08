import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { getProfileByEmail } from '../graphql/api';
import Context from '../store/context';

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

  useEffect(() => {
    if (!profile.length) {
      setProfile(getProfile(data))
    }
  }, [data, profile.length]);

  return (
    <Content>
      <Nav>
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
        <ul>
          <li><a href=''>Tall Poppy</a></li>
          <li><a href=''>Bitly</a></li>
        </ul>
      </Nav>
      <Application>
        <nav>
          <h4>Application</h4>
          <div>Software Engineer @ Tall Poppy</div>
          <div>
            <div>INTERVIEWS</div>
            <div><a href=''>+ Add Interview</a></div>
          </div>
          <ul>
            <li>
              <div>
                <div>Recruiter call</div>
                <div>Monday, June 9th 2021</div>
              </div>
            </li>
            <li>
              <div>
                <div>Recruiter call</div>
                <div>Monday, June 9th 2021</div>
              </div>
            </li>
          </ul>
        </nav>
        <Interview>
          <h2>Recruiter Call</h2>
          <nav>
            <ul>
              <li>Guided Notes</li>
              <li>Free Form Notes</li>
              <li>The Feels</li>
            </ul>
          </nav>
          <section>
            <div>There will be some notes here</div>
          </section>
        </Interview>
      </Application>
    </Content>
  );
};
