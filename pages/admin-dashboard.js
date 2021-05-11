import { useState } from 'react';
import { allProfilesInfo } from '../graphql/api';
import Profile from '../components/admin-dashboard/profile';
import useUser from '../hooks/useUser';

export default function AdminDashboard() {
  const user = useUser();
  const [profiles, setProfiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const getProfiles = async () => {
    const { data, errorMessage } = await allProfilesInfo();
    if (!!errorMessage) {
      setErrorMessage(errorMessage);
    }
    else {
      setProfiles(data ? data.allProfilesInfo.data : []);
    }
  };

  return (user?.role === "Administrator") ? (
    <>
      <section>
        <h1>Admin Dashboard</h1>
        <button disabled={(!!profiles.length || !!errorMessage)} onClick={() => getProfiles()}>Get User Profiles</button>
        {errorMessage ? <p>Sorry, there was an issue: {errorMessage}</p>
            : profiles.map((entry) => {
              return <Profile key={entry._id} entry={entry} />
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