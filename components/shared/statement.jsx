import PropTypes from 'prop-types';

const Statement = ({onClick, overline, title, buttonText}) => {
  return (
    <>
      <p>{overline}</p>
      <h1>{title}</h1>
      <button onClick={onClick}>{buttonText}</button>
    </>
  );
};

export default Statement;

Statement.propTypes = {
  onClick: PropTypes.func,
  overline: PropTypes.string,
  title: PropTypes.string,
  buttonText: PropTypes.string
};

Statement.defaultProps = {
  onClick: () => {},
  overline: '', 
  title: '',
  buttonText: ''
};
