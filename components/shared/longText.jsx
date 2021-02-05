import PropTypes from 'prop-types';

const LongText = ({onClick, overline, title, buttonText, name}) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <p>{overline}</p>
      <h1>{title}</h1>
      <textarea name={name} rows="4" cols="50" onChange={onChange} value={text}/>
      <button onClick={()=>{onClick(text)}}>{buttonText}</button>
    </>
  );
}

export default LongText;

LongText.propTypes = {
  onClick: PropTypes.func,
  overline: PropTypes.string,
  title: PropTypes.string,
  buttonText: PropTypes.string,
  name: PropTypes.string
};

LongText.defaultProps = {
  onClick: () => {},
  overline: 'Overline',
  title: 'Title',
  buttonText: 'Button',
  name: 'someInput'
};
