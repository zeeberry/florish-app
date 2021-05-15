import { useContext } from 'react';
import Context from '../../store/context';
import DropDown from '../shared/dropDown';

const InterviewType = ({ onClick }) => {
  const options = [
    'Phone Screen',
    'Conversation with Manager',
    'Technical Whiteboarding',
    'Technical Pairing',
    'Technical System Design',
    'Behavioral/Cultural',
  ];
  const context = useContext(Context);
  const handleClick = (type) => {
    context.dispatch({
      type: 'interview/setType',
      payload: type,
    });
    onClick();
  };
  return (
    <>
      <DropDown
        onClick={handleClick}
        overline='Solid.'
        title='What kind of interview is it?'
        options={options}
        buttonText='Next'
        name='type'
      />
    </>
  );
};

export default InterviewType;
