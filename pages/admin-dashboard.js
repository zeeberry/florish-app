import { useState, useEffect } from 'react';
import { allProfilesInfo } from '../graphql/api';
import Profile from '../components/admin-dashboard/profile';

const getProfiles = (data) => {
  return data ? data.allProfilesInfo.data : [];
};

export default function AdminDashboard() {
  const { data, errorMessage } = allProfilesInfo();
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    if (!profiles.length) {
      setProfiles(getProfiles(data));
    }
  }, [data, profiles.length]);

  return (
    <>
      <section>
        <h1>Admin Dashboard</h1>
        {errorMessage ? (
          <p>Sorry, there was an issue</p>
        ) : !data ? (
          <p>Loading entries...</p>
        ) : (
          profiles.map((entry) => {
            return <Profile key={entry._id} entry={entry} />;
          })
        )}
      </section>
    </>
  );
}
