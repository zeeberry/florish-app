import { useContext } from 'react';
import Context from '../../store/context';
import Email from '../shared/email';

const Contact = ({onClick}) => {
  const context = useContext(Context);
  const handleClick = (email) => {
    context.dispatch({
      type: 'user/setEmail',
      payload: email
    });
    onClick();
  };
  return (
    <>
      <Email
        onClick={handleClick}
        overline='Almost done.'
        title='What email shall we reach out to you?'
        buttonText='Next'
        name='email'
      />
    </>
  );
};

export default Contact;
