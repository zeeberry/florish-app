import PropTypes from 'prop-types';

const ShortText = ({onClick, overline, title, buttonText}) => {
  return (
    <>
      <p>{overline}</p>
      <h1>{title}</h1>
      <input type='text' />
      <button onClick={onClick}>{buttonText}</button>
    </>
  );
};

export default ShortText;

ShortText.propTypes = {
  onClick: PropTypes.func,
  overline: PropTypes.string,
  title: PropTypes.string,
  buttonText: PropTypes.string
};

ShortText.defaultProps = {
  onClick: PropTypes.func,
  overline: PropTypes.string,
  title: PropTypes.string,
  buttonText: PropTypes.string
};
