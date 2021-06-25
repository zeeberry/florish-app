import {useState, useContext} from 'react';
import {Overline} from '../shared/elements';
import Context from '../../store/context';
import PropTypes from 'prop-types';

const Email = ({onClick}) => {
  const [email, setText] = useState('');
  const context = useContext(Context);
  const handleClick = (email) => {
    context.dispatch({
      type: 'user/setEmail',
      payload: email
    });
    onClick();
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <Overline>Nice to meet you, {context.state.user.name}.</Overline>
      <Overline>Let's create an account for you, first.</Overline>
      <h1>What's your email?</h1>
      <label>Email</label>
      <input type='email' name='email' value={email} onChange={onChange} required/>
      <button onClick={handleClick}>Next</button>
    </>
  );
};

export default Email;

Email.propTypes = {
  onClick: PropTypes.func,
  overline: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  buttonText: PropTypes.string,
  name: PropTypes.string
};

Email.defaultProps = {
  onClick: () => {},
  overline: '',
  title: '',
  buttonText: '',
  name: ''
};
