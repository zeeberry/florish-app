import PropTypes from 'prop-types';
import {useState} from 'react';

const MultipleChoice = ({onClick, overline, title, buttonText, name, options}) => {
  const [data, setData] = useState(0);
  return (
    <>
      <p>{overline}</p>
      <h1>{title}</h1>
      {options.map((option) =>
        <div key={option.toLowerCase()} >
          <input 
            type="radio" 
            id={option.toLowerCase()} 
            value={option.toLowerCase()} 
            name={name}/>
          <label htmlFor={option.toLowerCase()}>{option}</label>
        </div>
      )}
      <button onClick={onClick}>{buttonText}</button>
    </>
  );
};

export default MultipleChoice;

MultipleChoice.propTypes = {
  onClick: PropTypes.func,
  overline: PropTypes.string,
  title: PropTypes.string,
  buttonText: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
};

MultipleChoice.defaultProps = {
  onClick: () => {},
  overline: 'Overline',
  title: 'Title',
  buttonText: 'Button'
};
