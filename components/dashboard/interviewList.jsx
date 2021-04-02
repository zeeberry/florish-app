import styled from 'styled-components';
import PropTypes from 'prop-types';
import InterviewListItem from './interviewListItem';
import { WhiteLink as Link, DashboardHeader } from '../shared/elements';

const Section = styled.section`
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white };
  min-height: 21em;
  flex: 1;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1em;
`;

const Header = styled(DashboardHeader)`
`;

const Title = styled.h2`
  margin: 0.2em 0 0;
  font-size: 1.2em;
`;

const Eyebrow = styled.h1`
  margin: 0;
  font-size: 0.8em;
  font-weight: normal;
  text-transform: uppercase;
`;

const List = styled.ul`
  margin: 1em 0;
`;

const Rating = styled.div`
  display: flex;
  margin-top: 0.2em;
`;

const Fire = styled.div`
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background: ${(props) => props.theme.white };
  margin-left: 0.2em;
`;

export default function InterviewList({interviews, company}) {

  return (
    <Section>
      <Header color='gray'>
        <Eyebrow>Interviews</Eyebrow>
        <Title>Software Engineering @ {company}</Title>
        <Rating><Fire/><Fire/><Fire/></Rating>
      </Header>
      <LinkWrapper>
        <Link href=''>+ Add Interview</Link>
      </LinkWrapper>
      <List>
        {interviews.map((interview, index)=> 
          <InterviewListItem 
            key={interview} 
            label={interview} 
            selected={index === 1} />
        )}
      </List>
    </Section>
  );
};

InterviewList.propTypes = {
  interviews: PropTypes.arrayOf(PropTypes.string).isRequired,
  company: PropTypes.string.isRequired
};
