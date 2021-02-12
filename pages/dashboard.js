import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { useGuestbookEntries } from '../graphql/api';
import Context from '../store/context';

const getEntries = (data) => {
  return data ? data.entries.data.reverse() : []
}

export default function Dashboard() {
  const { data, errorMessage } = useGuestbookEntries();
  const [ entries, setEntries ] = useState([]);
  const { state } = useContext(Context);

  useEffect(() => {
    if (!entries.length) {
      setEntries(getEntries(data))
      console.log(getEntries(data));
    }
  }, [data, entries.length]);

  return (
    <>
      <section>
      {!data ? (
          <p>Loading entries...</p>
      ) : entries.map((entry, index, allEntries) => {
          const date = new Date(entry._ts / 1000);
          return (
            <p key={entry._id}>
              {entry.twitter_handle}
            </p>
          )
        })
      }
      <div>{state.user.name}</div>
      </section>
    </>
  );
};
