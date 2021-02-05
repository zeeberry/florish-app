import {useState} from 'react';
import PropTypes from 'prop-types';

const Email = ({onClick, overline, title, buttonText, name, collection}) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    const data = {
      type: name, 
      value: text,
      collection
    };
    onClick(data);
  };

  return (
    <>
      <p>{overline}</p>
      <h1>{title}</h1>
      <input type='email' name={name} value={text} onChange={onChange} required/>
      <button onClick={handleClick}>{buttonText}</button>
    </>
  );
};

export default Email;

Email.propTypes = {
  onClick: PropTypes.func,
  overline: PropTypes.string,
  title: PropTypes.string,
  buttonText: PropTypes.string,
  name: PropTypes.string,
  collection: PropTypes.string
};

Email.defaultProps = {
  onClick: () => {},
  overline: '',
  title: '',
  buttonText: '',
  name: '',
  collection: ''
};
