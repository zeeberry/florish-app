import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.section`
  flex: 1;
  padding: 1em;
  min-height: 21em;
`;

const Header = styled.h1`
  margin: 0;
  font-size: 0.8em;
  font-weight: normal;
  text-transform: uppercase;
`;

const EmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
`;

const Message = styled.div`
  width: 20em;
  margin-top: 1.5em;
`;

const Description = styled.div`
  margin-top: 0.5em;
`;

const Image = styled.div`
  width: 4.5em;
  height: 4.5em;
  background: ${(props) => props.theme.black};
`;

export default function InterviewOverview({interview}) {

  return (
    <Section>
      <Header>Notes</Header>
      <EmptyMessage>
        <Image />
        <Message>
          <Title>Your notes will go here</Title>
          <Description>Your interview hasnt't happened yet. We will help you add notes once your interview is done. </Description>
        </Message>
      </EmptyMessage>
    </Section>
  );
};

InterviewOverview.propTypes = {
  interview: PropTypes.string.isRequired
};
