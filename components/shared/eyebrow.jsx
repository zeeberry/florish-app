import PropTypes from 'prop-types';
import {Overline} from './elements';

const Eyebrow = ({lines}) => {
  return (
    <>
      {lines.map((text) => <Overline key={text}>{text}</Overline>)}
    </>
  );
};

export default Eyebrow;

Eyebrow.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.string),
};

Eyebrow.defaultProps = {
  lines: [],
};
