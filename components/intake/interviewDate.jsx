import { useContext } from 'react';
import Context from '../../store/context';
import DateTime from '../shared/dateTime';

const InterviewDate = ({ onClick }) => {
  const { state, dispatch } = useContext(Context);
  const handleClick = (date) => {
    dispatch({
      type: 'interview/setDate',
      payload: date,
    });
    onClick();
  };
  return (
    <>
      <DateTime
        onClick={handleClick}
        overline={`Nice to meet you, ${state.user.name}`}
        title='When is your interview schedueled for?'
        buttonText='Next'
        name='date'
      />
    </>
  );
};

export default InterviewDate;
