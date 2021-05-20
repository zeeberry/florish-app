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
    else if (!!data) {
      setProfiles(data.allProfilesInfo.data);
    }
  };

  return (user === undefined) ?
    (
      <>
        <section>
          <h1>Loading Dashboard...</h1>
        </section>
      </>
    )
    : (user?.role === "Administrator") ? (
      <>
        <section>
          <h1>Admin Dashboard</h1>
          {!profiles.length && <button onClick={() => getProfiles()}>Get User Profiles</button>}
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