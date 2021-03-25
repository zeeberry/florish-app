import styled from 'styled-components';
import PropTypes from 'prop-types';

const Item = styled.li`
  padding: 0 1em;
  border-left: 3px solid white;
  margin: 1em 0;
  font-size: 1.17em;
  font-weight: bold;
`;

export default function ApplicationListItem({label, selected}) {
  return (
    <Item selected={selected}>{label}</Item>
  )
};

ApplicationListItem.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.bool
};

ApplicationListItem.defaultProps = {
  label: '',
  selected: false
};
