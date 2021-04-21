import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const getInterviews = (applications) => {
  let interviews = [];
  applications.forEach(application => {
    const nextInterview = application.interviews.data.length - 1;
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
};

toast.configure();
export default function Profile({ entry }) {
  const showEmailSuccessToast = () => {
    toast.success('Email sent! 🚀');
  };

  const showEmailErrorToast = (status, error) => {
    toast.error(`Error sending email: ${status} ${error}`);
  }

  const sendEmail = async (email) => {
    const result = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email })
    });
    if(result.status === 200){
      showEmailSuccessToast();
    }
    else{
      showEmailErrorToast(result.status, result.statusText);
    }
  };

  return (
    <div style={{ 'borderBottom': '0.1em solid black' }}>
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
      <button style={{ 'marginBottom': '1em' }} onClick={() => sendEmail(entry.account.email)}>Send Email</button>
    </div>
  )
};

Profile.propTypes = {
  entry: PropTypes.shape({
    account: PropTypes.shape({
      email: PropTypes.string
    }),
    _id: PropTypes.string,
    name: PropTypes.string,
    applications: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        company: PropTypes.string,
        role: PropTypes.string,
        interviews: PropTypes.shape({
          data: PropTypes.arrayOf(PropTypes.shape({
            _id: PropTypes.string,
            type: PropTypes.string,
            date: PropTypes.string
          }))
        })
      }))
    })
  })
};
