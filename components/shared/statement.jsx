import PropTypes from 'prop-types';
import Link from 'next/link';

const Statement = ({ onClick, overline, title, buttonText, href }) => {
  const button = <button onClick={onClick}>{buttonText}</button>;
  const link = <Link href={href}>{buttonText}</Link>;
  return (
    <>
      <p>{overline}</p>
      <h1>{title}</h1>
      {href ? link : button}
    </>
  );
};

export default Statement;

Statement.propTypes = {
  onClick: PropTypes.func,
  overline: PropTypes.string,
  title: PropTypes.string,
  buttonText: PropTypes.string,
  href: PropTypes.string,
};

Statement.defaultProps = {
  onClick: () => {},
  overline: '',
  title: '',
  buttonText: '',
  href: '',
};
