import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { allProfilesInfo } from '../graphql/api';

const getProfiles = (data) => {
  return data ? data.allProfilesInfo.data : [];
}

const getInterviews = (applications) => {
    let interviews = [];
    applications.forEach(application => {
        const interview = {
            _id: application.interviews.data[application.interviews.data.length-1]._id,
            company: application.company,
            role: application.role,
            type: application.interviews.data[application.interviews.data.length-1].type,
            date: application.interviews.data[application.interviews.data.length-1].date
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
        {!data ? (
            <p>Loading entries...</p>
        ) : errorMessage ? <p>Sorry, there was an issue</p>
        : profiles.map((entry) => {
                return (
                    <div key={entry._id}>
                        <p>
                            Name: {entry.name}
                        </p>
                        <p>
                            Email: {entry.account.email}
                        </p>
                        <div>
                            <div>Interviews</div>
                            {getInterviews(entry.applications.data).map((interview) => {
                                return (
                                    <div key={interview._id}>
                                        <p>
                                            Company: {interview.company}
                                        </p>
                                        <p>
                                            Role: {interview.role}
                                        </p>
                                        <p>
                                            Type: {interview.type}
                                        </p>
                                        <p>
                                            Date: {interview.date}
                                        </p>
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