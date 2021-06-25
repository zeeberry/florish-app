import { useContext } from 'react';
import Context from '../../store/context';
import ShortText from '../shared/shortText';

const Name = ({onClick}) => {
  const context = useContext(Context);
  const handleClick = (name) => {
    context.dispatch({
      type: 'user/setName',
      payload: name
    });
    onClick();
  };  
  return (
    <>
      <ShortText
        onClick={handleClick}
        overline={`Hello there 👋`}
        title={`What's your name?`}
        buttonText='Next'
        name='name'
        label='Name'
      />
    </>
  );
};

export default Name;
