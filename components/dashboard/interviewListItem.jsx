import styled from 'styled-components';
import PropTypes from 'prop-types';

const Item = styled.li`
  display: block;
  padding: 0.5em 1em;
  font-size: 1.17em;
  font-weight: bold;
  background: ${(props) => (props.selected ? props.theme.white : 'inherit')};
  color: ${(props) => (props.selected ? props.theme.black : 'inherit')};
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 1em;
  font-weight: normal;
`;

const SubTitle = styled.div`
  font-size: 0.8em;
  font-weight: normal;
`;

export default function InterviewListItem({ label, selected }) {
  return (
    <Item selected={selected}>
      <Title>{label}</Title>
      <SubTitle>Monday, June 9th 2021 @ 9am</SubTitle>
    </Item>
  );
}

InterviewListItem.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.bool,
};

InterviewListItem.defaultProps = {
  label: '',
  selected: false,
};
