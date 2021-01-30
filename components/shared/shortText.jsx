import PropTypes from 'prop-types';

const ShortText = ({onClick, overline, title, buttonText, name}) => {
  return (
    <>
      <p>{overline}</p>
      <h1>{title}</h1>
      <input type='text' name={name}/>
      <button onClick={onClick}>{buttonText}</button>
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
  overline: 'Overline',
  title: 'Title',
  buttonText: 'Button',
  name: 'someInput'
};
