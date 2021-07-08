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
  const overline = [`Nice to meet you, ${context.state.user.name}`, `Let's create an account for you, first.`];
  return (
    <>
      <Email
        onClick={handleClick}
        overline={overline}
        label='Email'
        title={`What's your email?`}
        buttonText='Create Account'
        name='email'
      />
    </>
  );
};

export default Contact;
