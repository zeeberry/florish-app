import {useState} from 'react';
import PropTypes from 'prop-types';

const TextInputGroup = ({label, name, onChange}) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
    onChange(name, e.target.value);
  };
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input id={name} type='text' name={name} value={text} onChange={handleChange}/>
    </>
  );
};

export default TextInputGroup;

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

TextInputGroup.defaultProps = {
  onChange: () => {}
};
