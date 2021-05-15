import { useContext } from 'react';
import Context from '../../store/context';
import MultipleChoice from '../shared/multipleChoice';

const Excitement = ({ onClick }) => {
  const options = ['Not at all', 'Not really', 'Meh', 'Somewhat', 'Very'];
  const company = 'Florish';
  const context = useContext(Context);
  const handleClick = (excitement) => {
    context.dispatch({
      type: 'application/setExcitement',
      payload: excitement,
    });
    onClick();
  };
  return (
    <>
      <MultipleChoice
        onClick={handleClick}
        overline='Got it.'
        title={`How excited are you about working for ${company}`}
        options={options}
        buttonText='Next'
        name='initialExcitement'
      />
    </>
  );
};

export default Excitement;
