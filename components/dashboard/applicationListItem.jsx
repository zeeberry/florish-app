import styled from 'styled-components';
import PropTypes from 'prop-types';

const Item = styled.li`
  display: block;
  padding: 0 1em;
  margin: 1em 0;
  font-size: 1.17em;
  font-weight: bold;
  border-left: 3px solid ${(props) => props.selected ? 'white' : 'black'};
  cursor: pointer;
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
