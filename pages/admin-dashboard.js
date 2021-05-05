import { useState, useEffect } from 'react';
import { allProfilesInfo } from '../graphql/api';
import Profile from '../components/admin-dashboard/profile';
import useUser from '../hooks/useUser';

const getProfiles = (data) => {
  return data ? data.allProfilesInfo.data : [];
};

export default function AdminDashboard() {
  //TODO:
  //- figure out how to delay allProfilesInfo request until user is logged in and verified as admin
  //- redirect newly logged in admins to the admin dashboard
  //- clean up code before committing
  const user = useUser();
  const { data, errorMessage } = allProfilesInfo();
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    if (!profiles.length) {
      setProfiles(getProfiles(data))
    }
  }, [data, profiles.length]);

  return (user?.role === "Administrator") ? (
    <>
      <section>
        <h1>Admin Dashboard</h1>
        {errorMessage ? <p>Sorry, there was an issue</p>
          : !data ? (<p>Loading entries...</p>)
            : profiles.map((entry) => {
              return <Profile key={entry._id} entry={entry}/>
            })
        }
      </section>
    </>
  ) : 
  <>
    <section>
      <h1>403 Forbidden</h1>
    </section>
  </>;
};