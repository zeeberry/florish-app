import styled from 'styled-components';
import PropTypes from 'prop-types';

const Item = styled.li`
  display: block;
  padding: 1em;
  font-size: 1.17em;
  font-weight: bold;
  background: ${(props) => (props.selected ? props.theme.black : 'inherit')};
  cursor: pointer;
`;

export default function ApplicationListItem({ label, selected }) {
  return <Item selected={selected}>{label}</Item>;
}

ApplicationListItem.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.bool,
};

ApplicationListItem.defaultProps = {
  label: '',
  selected: false,
};
