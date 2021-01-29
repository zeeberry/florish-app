import PropTypes from 'prop-types';

const LongText = ({onClick, overline, title, buttonText}) => {
  return (
    <>
      <p>{overline}</p>
      <h1>{title}</h1>
      <textarea rows="4" cols="50"></textarea>
      <button onClick={onClick}>{buttonText}</button>
    </>
  );
}

export default LongText;

LongText.propTypes = {
  onClick: PropTypes.func,
  overline: PropTypes.string,
  title: PropTypes.string,
  buttonText: PropTypes.string
};

LongText.defaultProps = {
  onClick: PropTypes.func,
  overline: PropTypes.string,
  title: PropTypes.string,
  buttonText: PropTypes.string
};
