import { useState, useEffect } from 'react';
import { allProfilesInfo } from '../graphql/api';

const getProfiles = (data) => {
  return data ? data.allProfilesInfo.data : [];
}

const getInterviews = (applications) => {
    let interviews = [];
    applications.forEach(application => {
        const nextInterview = application.interviews.data.length-1;
        const interview = {
            _id: application.interviews.data[nextInterview]._id,
            company: application.company,
            role: application.role,
            type: application.interviews.data[nextInterview].type,
            date: application.interviews.data[nextInterview].date
        };
        interviews.push(interview);
    })
    return interviews;
}

export default function AdminDashboard() {
  const { data, errorMessage } = allProfilesInfo();
  const [ profiles, setProfiles ] = useState([]);

  useEffect(() => {
    if (!profiles.length) {
      setProfiles(getProfiles(data))
    }
  }, [data, profiles.length]);

  return (
    <>
      <section>
        <h1>Admin Dashboard</h1>
        {errorMessage ? <p>Sorry, there was an issue</p> 
        : !data ? (
            <p>Loading entries...</p>
        ) 
        : profiles.map((entry) => {
                return (
                    <div style={{ 'border-bottom': '0.1em solid black' }} key={entry._id}>
                        <p>Name: {entry.name}</p>
                        <p>Email: {entry.account.email}</p>
                        <div>
                            <div>Interviews</div>
                            {getInterviews(entry.applications.data).map((interview) => {
                                return (
                                    <div key={interview._id}>
                                        <p>Company: {interview.company}</p>
                                        <p>Role: {interview.role}</p>
                                        <p>Type: {interview.type}</p>
                                        <p>Date: {interview.date}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })
        }
      </section>
    </>
  );
};