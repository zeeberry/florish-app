import PropTypes from 'prop-types';
import {useState} from 'react';

const DropDown = ({onClick, overline, title, buttonText, name, options}) => {
  const [data, setData] = useState(0);
  return (
    <>
      <p>{overline}</p>
      <h1>{title}</h1>
      <select name={name}>
        {options.map((option) =>
          <option value={option.toLowerCase()} key={option.toLowerCase()}>{option}</option>
        )}
      </select>
      <button onClick={onClick}>{buttonText}</button>
    </>
  );
};

export default DropDown;

DropDown.propTypes = {
  onClick: PropTypes.func,
  overline: PropTypes.string,
  title: PropTypes.string,
  buttonText: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
};

DropDown.defaultProps = {
  onClick: () => {},
  overline: 'Overline',
  title: 'Title',
  buttonText: 'Button'
};
