import DateTime from '../shared/dateTime';

const InterviewDate = ({onClick}) => {
  const name = 'Alyssa';
  return (
    <>
      <DateTime
        onClick={onClick}
        overline={`Nice to meet you, ${name}`}
        title='When is your interview schedueled for?'
        buttonText='Next'
        name='interviewDate'
      />
    </>
  );
};

export default InterviewDate;
