import { useContext } from 'react';
import Context from '../../store/context';
import ShortText from '../shared/shortText';

const Role = ({ onClick }) => {
  const context = useContext(Context);
  const handleClick = (role) => {
    context.dispatch({
      type: 'application/setRole',
      payload: role,
    });
    onClick();
  };
  return (
    <>
      <ShortText
        onClick={handleClick}
        overline='Oh Cool!'
        title='What role are you applying for?'
        buttonText='Next'
        name='role'
      />
    </>
  );
};

export default Role;
