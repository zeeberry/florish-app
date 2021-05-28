import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import useUser from '../hooks/useUser';
import { accountByEmail, updateInterviewNotes } from '../graphql/api';
import Context from '../store/context';
import ApplicationList from '../components/dashboard/applicationList';
import InterviewList from '../components/dashboard/interviewList';
import InterviewOverview from '../components/dashboard/interviewOverview';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Content = styled.div`
  min-height: 100vh;
  width: 100%;
`;

toast.configure();
export default function Dashboard() {
  const user = useUser({ redirectTo: '/signup', redirectIfFound: false });
  const [profile, setProfile] = useState(null);
  const [email, setEmail] = useState(null);
  const [applications, setApplications] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);  
  const [notes, setNotes] = useState('');
  const { state } = useContext(Context);

  const onChange = (e) => {
    setNotes(e.target.value);
  };

  const saveInterviewNotes = async (id, date, type) => {
    const { data, errorMessage } = await updateInterviewNotes(id, notes, date, type);
    if (data?.updateInterview.notes === notes) {
      toast.success("Notes saved! 🚀");
    }
    if(!!errorMessage) {
      toast.error(`There was an issue saving your notes: ${errorMessage}`);
    }
  };

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
  }, [user]);

  return (user === undefined) ?
    (
      <section>
        <h1>Loading Dashboard...</h1>
      </section>
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
                          <textarea defaultValue={interview.notes} onChange={onChange} />
                          <button onClick={() => saveInterviewNotes(interview._id, interview.date, interview.type)}>Save Interview Notes</button>
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
      <section>
        <h1>403 Forbidden</h1>
      </section>;
};
