import PropTypes from 'prop-types';

export default const Statement = ({onClick, overline, title, buttonText}) => {
  return (
    <>
      <p>{overline}</p>
      <h1>{title}</h1>
      <button onClick={onClick}>{buttonText}</button>
    </>
  );
}

Statement.propTypes = {
  onClick: PropTypes.func,
  overline: PropTypes.string, 
  title: PropTypes.string,
  buttonText: PropTypes.string
};

Statement.defaultProps = {
  onClick: PropTypes.func,
  overline: PropTypes.string, 
  title: PropTypes.string,
  buttonText: PropTypes.string
};
