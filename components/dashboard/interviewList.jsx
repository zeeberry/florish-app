import styled from 'styled-components';
import PropTypes from 'prop-types';
import InterviewListItem from './interviewListItem';

const Section = styled.section`
  padding: 1em;
  min-height: 21em;
  width: 18em;
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

export default function InterviewList({interviews, company}) {

  return (
    <Section>
      <Header>Application</Header>
      <h1>Software Engineering @ {company}</h1>
      <LinkWrapper>
        <div>Interviews</div>
        <Link href=''>+ Add Interview</Link>
      </LinkWrapper>
      <List>
        {interviews.map((interview, index)=> 
          <InterviewListItem 
            key={interview} 
            label={interview} 
            selected={index === 0} />
        )}
      </List>
    </Section>
  );
};

InterviewList.propTypes = {
  interviews: PropTypes.arrayOf(PropTypes.string).isRequired,
  company: PropTypes.string.isRequired
};
