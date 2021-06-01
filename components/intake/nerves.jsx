import { useContext } from 'react';
import Context from '../../store/context';
import MultipleChoice from '../shared/multipleChoice';
import { getOptionRank } from '../../util/intake';

const Nerves = ({onClick}) => {
  const options = ['Not at all', 'Not really', 'Meh', 'Somewhat', 'Very'];
  const context = useContext(Context);
  const handleClick = (nerves) => {
    nerves = getOptionRank(options, nerves);
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
