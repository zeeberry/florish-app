import PropTypes from 'prop-types';
import {useState} from 'react';

const DateTime = ({onClick, overline, title, buttonText, name, collection}) => {
  const today = (new Date()).toISOString();
  const [date, setDate] = useState(today);;
  const handleClick = () => {
    const data = {
      type: name,
      value: date,
      collection
    };
    onClick(data);
  };
  return (
    <>
      <p>{overline}</p>
      <h1>{title}</h1>
      <input type='datetime-local'
        name={name} value={date}
        min={today} onChange={(e)=>setDate(e.target.value)}/>
      <button onClick={handleClick}>{buttonText}</button>
    </>
  );
};

export default DateTime;

DateTime.propTypes = {
  onClick: PropTypes.func,
  overline: PropTypes.string,
  title: PropTypes.string,
  buttonText: PropTypes.string,
  name: PropTypes.string,
  collection: PropTypes.string
};

DateTime.defaultProps = {
  onClick: () => {},
  overline: 'Overline',
  title: 'Title',
  buttonText: 'Button',
  name: 'someInput',
  collection: ''
};
