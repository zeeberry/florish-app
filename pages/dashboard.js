import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { getProfileByEmail } from '../graphql/api';
import Context from '../store/context';

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
    <>
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
    </>
  );
};
