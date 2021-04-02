import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.section`
  flex: 1;
  padding: 1em;
  min-height: 21em;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 4em;
`;

const Link = styled.a`
  letter-spacing: 0.05em;
  font-size: 0.9em;
`;

const Header = styled.h1`
  margin: 0;
  font-size: 0.9em;
  font-weight: normal;
  text-transform: uppercase;
`;

const List = styled.ul`
  margin-top: 4em;
`;

export default function InterviewOverview({interview}) {

  return (
    <Section>
      <Header>Interview Overview</Header>
      <h1>{interview}</h1>
      <nav>
        <ul>
          <li>Guided Notes</li>
          <li>Free Form Notes</li>
          <li>The Feels</li>
        </ul>
      </nav>
    </Section>
  );
};

InterviewOverview.propTypes = {
  interview: PropTypes.string.isRequired
};
