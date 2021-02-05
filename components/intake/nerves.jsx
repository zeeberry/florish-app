import { useContext } from 'react';
import Context from '../../store/context';
import MultipleChoice from '../shared/multipleChoice';

const Nerves = ({onClick}) => {
  const options = ['Very','Somewhat', 'Meh', 'Not really', 'Not at all'];
  const context = useContext(Context);
  const handleClick = (nerves) => {
    context.dispatch({
      type: 'interview/setNerves',
      payload: nerves
    });
    onClick();
  };
  return (
    <>
      <MultipleChoice
        onClick={handleClick}
        overline='Got it.'
        title={`How nervous are you about this interview?`}
        options={options}
        buttonText='Next'
        name='nerves'
      />
    </>
  );
};

export default Nerves;
