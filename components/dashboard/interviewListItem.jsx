import styled from 'styled-components';
import PropTypes from 'prop-types';

const Item = styled.li`
  display: block;
  padding: 0 1em;
  margin: 1em 0;
  font-size: 1.17em;
  font-weight: bold;
  cursor: pointer;
`;

export default function InterviewListItem({label, selected}) {
  return (
    <Item selected={selected}>
      {label}
      Monday, June 9th 2021 @ 9am
    </Item>
  )
};

InterviewListItem.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.bool
};

InterviewListItem.defaultProps = {
  label: '',
  selected: false
};
