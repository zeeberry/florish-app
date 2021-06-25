import {useState} from 'react';
import PropTypes from 'prop-types';
import Eyebrow from './eyebrow';
import TextInputGroup from './textInputGroup';

const DoubleInput = ({onClick, overline, title, buttonText, inputs}) => {
  const [values, setValues] = useState({});

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const inputGroup = inputs.map((input) => 
    <TextInputGroup key={input.name} label={input.label} name={input.name} onChange={onChange}/>
  );

  return (
    <>
      <Eyebrow lines={overline} />
      <h1>{title}</h1>
      {inputGroup}
      <button onClick={() => onClick(values)}>{buttonText}</button>
    </>
  );
};

export default DoubleInput;

DoubleInput.propTypes = {
  onClick: PropTypes.func,
  overline: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    name: PropTypes.string
  }))
};

DoubleInput.defaultProps = {
  onClick: () => {},
  overline: [],
};
