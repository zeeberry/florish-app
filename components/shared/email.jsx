import {useState} from 'react';
import PropTypes from 'prop-types';
import Eyebrow from './eyebrow';

const Email = ({onClick, overline, title, buttonText, name, label}) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <Eyebrow lines={overline} />
      <h1>{title}</h1>
      <label htmlFor={name}>{label}</label>
      <input id={name} type='email' name={name} value={text} onChange={onChange} required/>
      <button onClick={()=>onClick(text)}>{buttonText}</button>
    </>
  );
};

export default Email;

Email.propTypes = {
  onClick: PropTypes.func,
  overline: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

Email.defaultProps = {
  onClick: () => {},
  overline: [],
};
