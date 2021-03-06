import {useState} from 'react';
import PropTypes from 'prop-types';

const ShortText = ({onClick, overline, title, buttonText, name}) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <p>{overline}</p>
      <h1>{title}</h1>
      <input type='text' name={name} value={text} onChange={onChange}/>
      <button onClick={() => onClick(text)}>{buttonText}</button>
    </>
  );
};

export default ShortText;

ShortText.propTypes = {
  onClick: PropTypes.func,
  overline: PropTypes.string,
  title: PropTypes.string,
  buttonText: PropTypes.string,
  name: PropTypes.string
};

ShortText.defaultProps = {
  onClick: () => {},
  overline: '',
  title: '',
  buttonText: '',
  name: ''
};
